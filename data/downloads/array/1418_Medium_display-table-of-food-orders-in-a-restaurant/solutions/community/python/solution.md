# Solution in Python3. Beats 100% of users with Python3

**Author:** John_Skull
**Votes:** 3
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/3872739/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/3872739/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
1. We have the input as an array of arrays, where each item has three information to provide about the order : [[Customer_Name, Table_Number, Food_Item]]. \r
2. The output should be in the form of an array of arrays which represents a table. The first item of the array contains the headings. The subsequent items contains details of the orders placed at each table.\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
We need to build and return the output array. The problem can be broken into three parts:\r
1. **Building the first item of output array (Heading)**\r
2. **Building the structure other items of output array (Order Details)**\r
3. **Updating Information about orders**\r
\r
##### **Building the first item of output array (Heading)**\r
We need to build a set with the Food Items. We will need to use a set as we do not want to add duplicates while traversing the orders(input) array. \r
This set is typecast into a list and then sorted alphabetically.\r
We also make a dictionary where items of this sorted array are entered as key with values starting from 1.\r
We append this array to our output array as the first element(Headings) after adding "Table" to the front of the the array.\r
##### **Building the structure other items of output array (Order Details)**\r
We build a set of Table Numbers used. This set contains table numbers as a string value. We typecast the set into a list. The items are sorted using the integer value  of items.\r
We also make a dictionary where items of this sorted array are entered as key with values starting from 1.\r
We now enter these orders into the output array as follows:\r
- We build an array with "0" as value for length equal to number of food items ordered. Let's call this as "Temp".\r
- We add items to output array as an array where the first item is a table number (taken from the sorted array of table numbers), and followed by the array "Temp" added to it.\r
\r
##### **Updating Information about orders**\r
At this stage our output array has the required structure. We have the Headings ready and the tables that eventually make orders are loaded with 0 orders as default value.\r
Now, we traverse the input array(orders). We locate the correct element in our output array using our dictionaries, which provide values from the keys using the food item and table number specified in the input array.\r
The selected element in the output array will be a string. It is first typecasted into an integer, incremented, and the again typecasted into a string.\r
After traversing the input array, our output array will be built and can be returned. \r
\r
# Complexity\r
- Time complexity: O(n)\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
<!-- - Space complexity: -->\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution:\r
    def displayTable(self, orders: List[List[str]]) -> List[List[str]]:\r
        a=set()\r
        b=set()\r
        for i in orders:\r
            a.add(i[2])\r
            b.add(i[1])\r
        a=list(a)\r
        b=list(b)\r
        a=sorted(a)\r
        b=sorted(b,key=lambda x:int(x))\r
        dic_a={}\r
        dic_b={}\r
        c=1\r
        for i in a :\r
            dic_a[i]=c\r
            c+=1\r
        c=1\r
        for i in b:\r
            dic_b[i]=c\r
            c+=1\r
        output=[]\r
        output.append(["Table"]+a)\r
\r
        crx=["0" for i in range(len(a))]\r
        for i in b:\r
            output.append([i]+crx)\r
        \r
        for i in orders:\r
            output[dic_b[i[1]]][dic_a[i[2]]]=int(output[dic_b[i[1]]][dic_a[i[2]]])\r
            output[dic_b[i[1]]][dic_a[i[2]]]+=1\r
            output[dic_b[i[1]]][dic_a[i[2]]]=str(output[dic_b[i[1]]][dic_a[i[2]]])\r
        \r
        return output\r
```