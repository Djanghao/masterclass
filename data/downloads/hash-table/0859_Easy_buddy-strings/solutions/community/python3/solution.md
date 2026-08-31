# ✅Beat's 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 230
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3710426/](https://leetcode.com/problems/buddy-strings/solutions/3710426/)

---

# Intuition:
The Intuition is to check if it is possible to swap two characters in string `s` to make it equal to string `goal`. It first handles the case where `s` and `goal` are identical by checking for duplicate characters. If they are not identical, it looks for the first pair of mismatched characters and tries swapping them to achieve equality. The code provides a solution by considering these two scenarios and returns `true` if swapping is successful, otherwise `false`.

# Explanation:
1. First, it checks if `s` is equal to `goal` using the `==` operator. If they are equal, it means the strings are identical.

2. If `s` is equal to `goal`, the code creates a temporary set called `temp` to store the unique characters present in `s`. It does this by converting the string `s` to a set of characters using the `set` constructor.

3. The code then returns the result of the comparison `temp.size() < goal.size()`. This comparison checks if the size of the set `temp` (number of unique characters in `s`) is less than the size of the string `goal`. If it is, it means there are duplicate characters in `s`, and swapping any two of them would result in `s` becoming equal to `goal`. In this case, the function returns `true`; otherwise, it returns `false`.

4. If `s` is not equal to `goal`, the code proceeds to find the indices `i` and `j` such that `s[i]` and `goal[i]` are the first pair of characters that are different from each other when scanning from the left, and `s[j]` and `goal[j]` are the first pair of characters that are different from each other when scanning from the right.
5. The code uses a `while` loop to increment the `i` index from left to right until it finds a mismatch between `s[i]` and `goal[i]`. Similarly, it uses another `while` loop to decrement the `j` index from right to left until it finds a mismatch between `s[j]` and `goal[j]`.
6. After finding the mismatched indices, the code checks if `i` is less than `j`. If it is, it means there is a pair of characters that can be swapped to make `s` equal to `goal`. In this case, the code uses the `swap` function to swap the characters `s[i]` and `s[j]`.

7. Finally, the code checks if `s` is equal to `goal` after the potential swap. If they are equal, it means we have successfully swapped two characters to make `s` equal to `goal`, and the function returns `true`. Otherwise, it returns `false`.

# Code
```C++ []
class Solution {
public:
    bool buddyStrings(string s, string goal) {
        int n = s.length();
        
        if(goal.length() != n){
            return false;
        }

        if(s == goal){
            set<char> temp(s.begin(), s.end());
            return temp.size() < goal.size(); // Swapping same characters
        }

        int i = 0;
        int j = n - 1;

        while(i < j && s[i] == goal[i]){
            i++;
        }

        while(j >= 0 && s[j] == goal[j]){
            j--;
        }

        if(i < j){
            swap(s[i], s[j]);
        }

        return s == goal;
    }
};
```
```Java []
class Solution {
    public boolean buddyStrings(String s, String goal) {
        if(s.length() != goal.length()){
            return false;
        }

        int n = s.length();
        if (s.equals(goal)) {
            Set<Character> temp = new HashSet<>();
            for (char c : s.toCharArray()) {
                temp.add(c);
            }
            return temp.size() < goal.length(); // Swapping same characters
        }

        int i = 0;
        int j = n - 1;

        while (i < j && s.charAt(i) == goal.charAt(i)) {
            i++;
        }

        while (j >= 0 && s.charAt(j) == goal.charAt(j)) {
            j--;
        }

        if (i < j) {
            char[] sArr = s.toCharArray();
            char temp = sArr[i];
            sArr[i] = sArr[j];
            sArr[j] = temp;
            s = new String(sArr);
        }

        return s.equals(goal);
    }
}
```
```Python3 []
class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        n = len(s)

        if len(goal) != n:
            return False;

        if s == goal:
            temp = set(s)
            return len(temp) < len(goal)  # Swapping same characters

        i = 0
        j = n - 1

        while i < j and s[i] == goal[i]:
            i += 1

        while j >= 0 and s[j] == goal[j]:
            j -= 1

        if i < j:
            s_list = list(s)
            s_list[i], s_list[j] = s_list[j], s_list[i]
            s = ''.join(s_list)

        return s == goal
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**