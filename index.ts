import inquirer from "inquirer";

let todo_list: string[] = [];

let while_condition: boolean = true

while(while_condition === true){

//--------------------------------------------options--------------------------------------------

let options = await inquirer.prompt([{
      type: 'list',
      name: 'user_options',
      message: 'select an options',
      choices: ["Add","Remove"]
}]) 

//-----------------------------------------------Add-----------------------------------------------

if (options.user_options === "Add"){
      let ans = await inquirer.prompt([{
            type: 'input',
            name: 'user_ans',
            message: 'Write something to add in the task list',
      }])
      
   if (ans.user_ans !== ''){
      todo_list.push(ans.user_ans);
      console.log(todo_list);
   }else{
      console.log('Please write something to add in the todo_list.');
   }
 }

//-----------------------------------------------Remove-----------------------------------------------

else if (options.user_options === "Remove"){
      let removechoice = await inquirer.prompt([{
            type: 'list',
            name: 'remove_item',
            message: 'Select item to remove',
            choices: todo_list
      }])

let index_to_remove = todo_list.indexOf(removechoice.remove_item);

if(index_to_remove >= 0){
      todo_list.splice(index_to_remove, 1);
      console.log('you removed:', removechoice.remove_item);
      console.log(todo_list);
}

}
//-----------------------------------------------Confirmation-----------------------------------------------

let user_ans =await inquirer.prompt([{
      type: 'confirm',
      name: 'Selection',
      message: 'Do you want to continue',
      default: true
}])

if (user_ans.Selection === false){
      while_condition = false;
  }
}

console.log(`Thank yu for using todo list.`);
