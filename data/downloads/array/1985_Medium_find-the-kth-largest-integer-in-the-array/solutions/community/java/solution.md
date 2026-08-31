# Time  O(N*LogN) || Space O(1) || Sorting Comparator | Java

**Author:** hemant-singh1811
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2010349/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2010349/)

---

### **Sorting Comparator**

##### we can not able to use Integer.parseInt() or Long.parseLong() functions for comparing number because string length is upto 100 (i.e it exceeds the range of int and long).

sort the string array by comparing string (using lambda expression in java) 
* string that have greater length will be greater(in term of number).
*    if strings length are equal then traversing on the both strings and compare its i-th integer,
     which i-th integer will greater then corresponding string will be greater (in term of number)

**Time complexity** -**O(100 * N * LogN)** { String length can be equal to 100 in worst case }
**Space complexity** -**O(1)**

**JAVA Code**

```
class Solution {
    public String kthLargestNumber(String[] nums, int k) {
        
        int n=nums.length;
        
        Arrays.sort(nums,(a,b)->{
            if(a.length()>b.length()) return 1;
            else if(b.length()>a.length()) return -1;
            else{
              return isgreater(a,b);   
            }
        });
        return nums[n-k];        
    }
    
    public static int isgreater(String a,String b){
        
        int n=a.length();
        
        for(int i=0;i<n;i++){
            int a1=Integer.parseInt(""+a.charAt(i));
            int b1=Integer.parseInt(""+b.charAt(i));
            if(a1>b1) return 1;
            if(b1>a1) return -1;
        }
        return 0;
    }
}
```