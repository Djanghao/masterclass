# Optimised dart solution

**Author:** Shivamm03
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/5735166/](https://leetcode.com/problems/repeated-dna-sequences/solutions/5735166/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
As the Question said we needed to find the repeated dna sequence in the array. And to check for repetition we will use hashMap.

In it we will store the value of the dna, To store the value of the dna we will make a substring from String s, given in the question , whose length will be 10. 

Then we will check if the substring already exist in the map.

If it exist we will add the string to a Set(we will use set as a dna sequence can repeat more than once , but we have to return it only once). 

If the dna Sequence does not  appear in the map , We will add it to the map.

Through this process after our loop end we had check all subtring of length 10, and have the repeated ones in the Set .

At last we will return the Set. 

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<String> findRepeatedDnaSequences(String s) {

Set<String> ans={};
Map<String,int> dnaMap ={};

for(int i=0;i<=s.length-10;i++){
    String dna = s.substring(i,i+10);
    print(dna);
    if(dnaMap.containsKey(dna)){
        ans.add(dna);
    }else{
        dnaMap[dna] = 1;
    }
}
return ans.toList();
    
  }
}
```