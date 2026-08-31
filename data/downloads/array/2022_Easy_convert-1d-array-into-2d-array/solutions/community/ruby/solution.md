# Easy Understanding

**Author:** ImDhruba
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5721225/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5721225/)

---

![image](./images/0.gif)




### **Intuition**
The problem statement implies that the ```length of original must equal 
m \xD7 n ```, the total number of elements required to fill the matrix. 

So, we'll start by checking if it's possible to construct the array and return an empty array if not.

Next, we'll simulate filling the 2D matrix row by row using nested loops.

       Row (i): The row index i is directly controlled by the outer loop, which ranges from 0 to m-1. 
	   Each time the outer loop increments i, it moves to the next row.
	   
       Column (j): The column index j is controlled by the inner loop, which ranges from 0 to n-1. 
	   As the inner loop increments j, it moves across the columns of the current row.
	   
### **Algorithm**
   1. Check if the length of the original array is equal to m * n:
       If not, return an empty 2D array.
    2. Initialize a 2D array resultArray of dimensions m \xD7 n 
    3. Create a variable index to keep track of the current position in the original array.
	4. Iterate through each row i of resultArray:
		* For each row, iterate through each column j:
		
                      * Assign the element at the current index of the original array to resultArray[i][j].
                      * Increment index to move to the next element in original.
    5. After filling all elements, return the resultArray.



**Time Complexity : O(m * n)
Space Complexity : O(1)**


### **Code**

<iframe src="https://leetcode.com/playground/oMKgzJQ7/shared" frameBorder="0" width="800" height="450"></iframe>




### In Advance C++ (17) features,

<iframe src="https://leetcode.com/playground/NULskCxL/shared" frameBorder="0" width="800" height="400"></iframe>


**std::copy for Range Operations:**  The std::copy function simplifies the process of copying elements from one range to another. This version of the code uses std::copy to directly copy slices of the original 1D array into each row of the 2D array.

**Range-based Operations**: While not a new feature per se, the approach of using std::copy showcases how you can work with ranges in a cleaner way, benefiting from the standard algorithms introduced in earlier C++ versions.




![image](./images/1.gif)







