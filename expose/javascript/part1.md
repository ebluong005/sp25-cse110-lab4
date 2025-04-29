1. What is printed by line 9? If the code returns an error, explain why. ^^^^^
   Line 9 would print values added: 20.
   
2. What is printed by line 13? If the code returns an error, explain why. 
   Line 13 print print final result: 20.
   
3. Why should you not use var? Explain why. 
   You should not use var because it is function-scoped and gets hoisted, making it easier to accidentally access or overwrite variables, leading to confusing bugs. 

4. What is printed by line 9? If the code returns an error, explain why. ^^^^^
   values added: 20

5. What is printed by line 13? If the code returns an error, explain why. 
   ReferenceError: result is not defined, since it was declared in the if {} statement. So result would be out of block in line 13

6. What is printed by line 9? If the code returns an error, explain why. ^^^^^
   The code throws a TypeError: Assignment to constant variable. on line 7, so line 9 is never reached and nothing is printed.

7. What is printed by line 13? If the code returns an error, explain why. 
   The code does not reach line 13 because of the earlier crash at line 7 (TypeError: Assignment to constant variable.).


