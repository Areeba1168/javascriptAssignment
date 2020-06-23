                // String Method
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name                
   
   // var firstName=prompt("enter your first name")
    // var LastName=prompt("enter your last name")
    // document.write("Hello"+" "+firstName+" "+LastName)

    // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser     

    // var a= prompt("ENter your favourite mobile model")
    // var b=a.length;
    // document.write("Length of string:" + b);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser     
    
    // var a="Pakistani";
    //     document.write(a+"<br>")
    // var b= a.indexOf("n");
    //     document.write("Index of n is "+b+"<br>")

    // 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser    

    // var a="Hello World";
    //     document.write(a+"<br>")
    // var b= a.lastIndexOf("l");
    //     document.write("Last Index of l is "+ b +"<br>")

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser   

    // var a="Pakistani";
    //     document.write(a+"<br>")
    // var b=a.charAt(3);
    //     document.write("Char at 3 is "+b+"<br>") 

 // 6. Repeat Q1 using string concat() method. 
  
    // var str1=prompt("Enter first name");
    // var str2=prompt("Enter last  name");
    // str=str1.concat(str2);
    // document.write(str);

    
 // 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser    
        
    //  var a="Hyderabad"+"<br>";
    //     document.write(a)
    //  var b=a.replace("Hyder","Islam");
    //     document.write(b);
 
// 8.Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together    
    //  var a= "Ali and Sami are best friends. They play cricket and football together.";
    //     document.write(a+"<br>")
    //  var b=a.replace(/and/g,"&");
    //     document.write(b+"<br>")

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
  
    // var a="472"
    // document.write(a+"<br>");
    // document.write(typeof a+"<br><br>");
    // var b=Number(a);
    // document.write(b+"<br>");
    // document.write(typeof b);

 // 10. Write a program that takes user input. Convert and show the input in capital letters        
    //  var a=prompt("enter any word");
    //  var b=a.toUpperCase();
    //     document.write(b+"<br>") 
 
// 11. Write a program that takes user input. Convert and show the input in title case.       
        // var a=prompt("enter any word");
        // var b=a[0].toUpperCase()+a.slice(1).toLowerCase();
        //         document.write(b+"<br>");
                
 // 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser               
    //   var a=35.36
    //   var b=a.valueOf();
    //   document.write(b+"<br>");               
    
 // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 
        //   var a=["cookie","apple pie", "chips", "patties"] 
        //   var b=prompt("what do you want to order?");
        //   var c=b.toLowerCase();                         
        //   for (var i=0;i<a.length;i++){
        //       if (c===a[i]){
        //           alert("thanks")
        //           break
        //       }
        //       else{
        //           alert("no")
                
        //       }
        //       break    
        //   }
            
 // 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser        
        // var a="university of Karachi";
        // var arr=a.split("");
        // for (var i=0 ; i<(arr.length) ; i++) {
        //     document.write(arr[i] + "<br/>")
        // }

 // 17. Write a program to display the last character of a user input
//    var a=prompt("Enter any word")
//    var b=a.charAt(a.length-1);
//     document.write(b);

                        // Math Method


 //1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
    
    // var a=prompt("enter number");
    // document.write("Number:"+ a+"<br>")
    // document.write("Round Off value: "+ Math.round(a)+"<br>" )
    // document.write("Floor value: "+ Math.floor(a)+"<br>" )
    // document.write("Ceil value: "+ Math.ceil(a) +"<br><br>")

 // 2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
 

    // var a =prompt("enter any neg number")
    // document.write("Number:"+ a+"<br>")
    // document.write("Round Off value: "+ Math.round(a)+"<br>" )
    // document.write("Floor value: "+ Math.floor(a)+"<br>" )
    // document.write("Ceil value: "+ Math.ceil(a) +"<br>")
    
// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
    
    // var a=prompt("enter number");
    // document.write("Absolute value :"+Math.abs(a)+"<br>")

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
        // var a=Math.round(Math.random()*6+1)
        // document.write(a+"<br>")

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser         
        // var a=Math.floor(Math.random()*2+1)
        // document.write(a+"<br>")
        // if(a==1){
        //     document.write("Tails")
        // }else{
        //     document.write("Head")
        // }
        //     document.write("<br>")

// 6. Write a program that shows a random number between 1 and 100 in your browser. 

    // var a=Math.round(Math.random()*100+1);
    // document.write("random between 1 and 100:"+a+"<br>")

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user
            // var a=Math.floor(Math.random()*10+1)
            // document.write(a)
            // var b=prompt("Enter number between 1 & 10");
            // if (a==b){
            //     alert("Congratulations")
            // }else{
            //     alert("Thanks")
            // }

                                // Date Methods

 // 1. Write a program that displays current date and time in your browser. 


        // var a = new Date();
        // document.write(a+"<br>");

 // 2. Write a program that alerts the current month in words. For example December.

        //  var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
        //  var today=new Date();
        //  document.write(months[today.getMonth()]);

//  3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
  
    // var days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    // var now=new Date();
    // alert(days[now.getDay()]);
    // document.write("<br>")

 // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
    // var days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    // var now=new Date();
    // var a=days[now.getDay()];
    // if (a=="Sun"||"Sat"){
    //     alert("Its Fun Day")
    // }else{
    //     document.write(a);

 // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
    // var now=new Date();
    // var date=now.getDate();
    // document.write(date);
    // if (date==15){
    //     alert("First Fifteen days of month")
    // }else{
    //     alert("Last days of month")
    // }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object    
    // var today=new Date();
    // document.write("Current date:"+today+"<br>")
    // var milli=today.getTime();
    // document.write("Elapsed milli sec since jan 1970:"+milli+"<br>")
    // var acc=milli/(1000*60)
    // document.write("Elapsed minutes since jan 1970:"+Math.round(acc)+"<br>")

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
    // var now=new Date();
    // var a=now.getHours();
    // document.write(a);
    // if(a==12){
    //     alert("Its AM")
    // }else{
    //     alert("Its PM")
    // }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.     
   
    // var LaterDate=new Date("Dec,31,2020")
    // document.write(LaterDate);
    

                        // Fuction
  
// 1. Write a function that displays current date & time in your browser.  
// function date(){
//     document.write(new Date())   
// } 
// date();
//         document.write("<br>")
// // 2. Write a function that takes first & last name and then it greets the user using his full name. 

// function Name(fname,lname){
//         document.write("Hello "+ fname +" "+ lname);
// }
   // Name("Ariba","Jawed");
//         document.write("<br>")
// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers

// function add(a,b){
//     var s = a+b;
//     return s;
// }
//     var total=add(10,20);
//     document.write(total)
//     document.write("<br>")
//4. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 
    // var a=prompt("enter first value")
    // var b=prompt("enter operator")
    // var c=prompt("enter second value")
    // if(b==="+"){
    //    alert( (+a)+(+c))
    // }else if(b==="-"){
    //     alert( a-c)
    // }else if(b==="*"){
    //     alert( a*c)
    // }else if(b==="/"){
    //     alert( a/c)
    // }
 // 5. Write a function that squares its argument
//     function square(a){
//         document.write(a*a)
// }    
//     square(7)
