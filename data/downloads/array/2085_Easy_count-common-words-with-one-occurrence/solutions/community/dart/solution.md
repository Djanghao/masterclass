# Counting Common Words With One Occurrence using Dart GOAT language 🐐.

**Author:** Abdusalom_16
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5589641/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5589641/)

---

# Intuition
-` To solve the problem all we need is iterate through elements of the given list and check if they are common with one occurance and to do that we have to remove each iterated element and check in both lists if both contains that removed element then we check the occurance.`

# Approach
1. To solve the problem first I created the list to store elements that I remove throught iteration and created a variable to count elements that are common with one occurancce.
2. Next thing that I did was using for loop to iterate elements and inside the loop I created another variable that stores value in each iteration. In each iteration I removed a value from that index in the first list after that checked using if statement if it occurs one time, common and not in the list that was created in the list that was created in the first step that I use to store removed values. If statements is true then I removed that value from the second list to check if it occurs more than one time. If it is only one time then added one to the variable that was created to count common words with one occursion.
3. Next thing to do was adding removed values to the list that stores removed values and made i minum 1.
4. At last returned the value of variable that I used to count common words with one occurence.



# Code
```
class Solution {
  
int countWords(List<String> words1, List<String> words2) {

    List<String> list = [];
    int count = 0;

    for(int i = 0; i < words1.length; i++){
        String value = words1[i];

        words1.removeAt(i);
        if(!words1.contains(value) && words2.contains(value) && !list.contains(value)){
            words2.remove(value);
            if(!words2.contains(value)){
                count++;
            }
        }
        list.add(value);
        i--;
    }

    return count;
}

}
```