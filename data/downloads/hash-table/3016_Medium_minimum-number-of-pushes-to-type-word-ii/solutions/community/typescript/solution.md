# ARRAY =>FASTEST ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5594207/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5594207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we know that the word is made up of 26 letters
we want the freq of each letter in our word 
so that we can sort them in descending order 
so that we give the first click of a number to this
so as to minimize the total clicks 
let s see how 
# Approach
<!-- Describe your approach to solving the problem. -->
we use an empty 26 space array all started to 0 
then we itreate the word and store the frequencies
then we sort them in descending order
from then on just need to calculate the clicks
all the first 8 letters in our array can be clicked 1 time 
next 8 need 2 clicks and so on ....
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-zyj28v.jpg](./images/0.jpeg)

# Code
```javascript []
var minimumPushes = function(word) {
    let arr = new Array(26).fill(0)
    for(let char of word){
        arr[char.charCodeAt(0)-97]++
    }
    arr.sort((a,b)=>b-a)
    let res=0
    for(let i=0;i<arr.length;i++){
        res+= arr[i]*(Math.floor(i/8)+1)
    }
    return res
};
```
```python []
def minimum_pushes(word):
    arr = [0] * 26
    
    for char in word:
        arr[ord(char) - ord('a')] += 1
    
    arr.sort(reverse=True)
    
    res = 0
    for i in range(len(arr)):
        res += arr[i] * ((i // 8) + 1)
    
    return res

# Example usage
print(minimum_pushes("yourwordhere")) # Replace with actual word

```
```java []
import java.util.Arrays;

public class MinimumPushes {
    public static int minimumPushes(String word) {
        int[] arr = new int[26];
        
        for (char ch : word.toCharArray()) {
            arr[ch - 'a']++;
        }
        
        Arrays.sort(arr);
        
        int res = 0;
        for (int i = 0; i < arr.length; i++) {
            res += arr[i] * ((i / 8) + 1);
        }
        
        return res;
    }

    public static void main(String[] args) {
        System.out.println(minimumPushes("yourwordhere")); // Replace with actual word
    }
}

```
```c []
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define ALPHABET_SIZE 26

int compare(const void *a, const void *b) {
    return (*(int *)b - *(int *)a);
}

int minimum_pushes(const char *word) {
    int arr[ALPHABET_SIZE] = {0};
    int res = 0;
    int length = strlen(word);
    
    for (int i = 0; i < length; i++) {
        arr[word[i] - 'a']++;
    }
    
    qsort(arr, ALPHABET_SIZE, sizeof(int), compare);
    
    for (int i = 0; i < ALPHABET_SIZE; i++) {
        if (arr[i] == 0) break;
        res += arr[i] * ((i / 8) + 1);
    }
    
    return res;
}

int main() {
    printf("%d\
", minimum_pushes("yourwordhere")); // Replace with actual word
    return 0;
}
```