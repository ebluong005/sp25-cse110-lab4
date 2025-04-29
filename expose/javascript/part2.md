1. What will happen at line 12 and why? If the code causes an error, explain why. 
   It prints 3 because var is function-scoped, so i is still accessible after the loop.

2. What will happen at line 13 and why? If the code causes an error, explain why. 
   It will print 150.

3. What will happen at line 14 and why? If the code causes an error, explain why. 
   It prints 150.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   It returns [50, 100, 150].

5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   Line 12 throws a ReferenceError: i is not defined because i was declared with let, which is block-scoped to the for loop.

6. What will happen at line 13 and why? If the code causes an error, explain why. 
   Line 13 throws a ReferenceError: discountedPrice is not defined because discountedPrice was declared with let inside the loop and cannot be accessed outside of it.

7. What will happen at line 14 and why? If the code causes an error, explain why.
   It prints 150.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why?
   It will return [50, 100, 150]

9. What will happen at line 11 and why? If the code causes an error, explain why. 
   Line 11 throws a Reference Error because i was declared with let and cannot be accessed outside the loop block.

10. What will happen at line 12 and why? If the code causes an error, explain why.
    It prints 3 because length was defined at the function level and holds the value 3.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why?
    The function returns [50, 100, 150].

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    Accessing the value of the name property in the student object: student.name
    Accessing the value of the Grad Year property in the student object: student["Grad Year"]
    Calling the function for the greeting property in the student object: student.greeting()
    Accessing the name property of the object in the Favorite Teacher property in student: student["Favorite Teacher"].name
    Access index zero in the array of the courseLoad property of the student object: student.courseLoad[0]

13.
    A. '3' + 2 = '32' (since this evaluated as a string)
    B. '3' - 2 = 1 (since - only works with numbers evaluated as subtraction)
    C.  3 + null = 3 (since null coverts to 0 --> 3 + 0 = 3)
    D. '3' + null = '3null' 
    E. true + 3 = 4 (since true = 1, false = 0, 1 + 3 = 4)
    F. false + null = 0 (0 + 0)
    G. '3' + undefined = '3undefined'
    H. '3' - undefined = NaN

14.
    A. '2' > 1 -> true
    B. '2' < '12' -> false
    C.  2 == '2' -> true
    D.  2 === '2' -> false
    E.  true == 2 -> false
    F.  true === Boolean(2) -> true

15. Explain the difference between the == and === operators.
    == compares two values after trying to convert. === compares two values without type conversion

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.  (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

Calling `modifyArray([1, 2, 3], doSomething)` returns `[2, 4, 6]`. The modifyArray function pushes each element in the [1, 2, 3], and use callback function call on each element.
So 1 is pushed and then goes trough doSomething, which gives 1 * 2, then 2 is now pushed into newArr. Same happens to 2 and 3. Then the function returns the array.

19.
    1  
    4  
    3  
    2