# [Java] Beats 98% solutions with easy to understand comments. No sorting!

**Author:** Kiszer
**Votes:** 12
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/692837/](https://leetcode.com/problems/largest-multiple-of-three/solutions/692837/)

---

```
class Solution {
    public String largestMultipleOfThree(int[] digits) {
        /**
         * Important notes:
         * 1. If the individual numbers added up are divisible by 3, so is the overall number
         * 2. Any num mod 3 that results in 0 is always wanted in our solution from largest to smallest
         * E.g. 9 will be at the front and 0 will be at the end of the number
         * Sorting makes solution easier but is O(nlogn)
         * 3. Since the digits will be 0-9 we can initialize arrays with indices 0-9 to store numbers
         */

        //If array only has one number, we can check it immediately
        if(digits.length == 1){
            if(digits[0] % 3 == 0){
                return Integer.toString(digits[0]);
            }
            else{
                return "";
            }
        }
        //create a remainder of Sum based on important notes 1(sum of Array % 3)
        int remainderOfSum = 0;
        //Important notes 3 array
        int[] counter = new int[10];

        //loop through each int in array l and increment counter[i] when we find value i
        for(int i: digits){
            counter[i]++;
            remainderOfSum = remainderOfSum + i;
        }
        //Create counters for how many number % 3 remainders = 1 and 2
        int remainderOf1 = counter[1] + counter[4] + counter[7];
        int remainderOf2 = counter[2] + counter[5] + counter[8];

        remainderOfSum = remainderOfSum % 3;
        /**
         * Cases:
         * 1: remainderOfSum is 0 -> nothing needs to be done
         * 2: remainderOfSum is 1, need to remove smallest digit that gives remainderOf1
         * 2(cont.): if we can't remove single digit then we remove 2 that give remainderOf2
         * 3: remainderOfSum is 2, need to remove smallest digit that gives remainderOf2
         * 3(cont.): if we can't remove single digit then we remove 2 that give remainderOf1
         */
        if(remainderOfSum == 1){
            if(remainderOf1 > 0){
                remainderOf1--;
            }
            else{
                remainderOf2 = remainderOf2 - 2;
            }
        }
        if(remainderOfSum == 2){
            if(remainderOf2 > 0){
                remainderOf2--;
            }
            else{
                remainderOf1 = remainderOf1 - 2;
            }
        }
        //Now that we know how many of each remainder we're allowed to use we can build the number
        //Since we want 9+0 to equal 90 let's build a string of nums then return it as an int
        StringBuilder sb = new StringBuilder();

        /**
         * Since we want the larger numbers first and the digits can only be 0-9 loop from 9 to 0
         * Append every value that's allowed based on the remainder counters and that we have
         * based the counter array that holds how many of each value we have
         */
        for(int i = 9; i >= 0; i--){
            if(i % 3 == 0){
                while(counter[i] > 0){
                    sb.append(i);
                    counter[i]--;
                }
            }
            if(i % 3 == 1){
                while(counter[i] > 0 && remainderOf1 > 0){
                    sb.append(i);
                    counter[i]--;
                    remainderOf1--;
                }
            }
            if(i % 3 == 2){
                while(counter[i] > 0 && remainderOf2 > 0){
                    sb.append(i);
                    counter[i]--;
                    remainderOf2--;
                }
            }
        }//end for loop

        //If stringbuilder is empty or starts with 0 return 0
        //Else return stringbuilder is an integer
        if(sb.length() == 0){
            return "";
        }
        else{
            if(sb.charAt(0) == '0'){
                return "0";
            }
            else{
                return sb.toString();
            }

        }
        
    }
}
```