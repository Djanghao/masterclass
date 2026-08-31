# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5757647/](https://leetcode.com/problems/convert-date-to-binary/solutions/5757647/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1383055440
- ***C++ Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1382925296
- ***Python3 Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1383044744
- ***Java Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1382934376
- ***C Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1383579537
- ***Python Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1382943233
- ***C# Code -->*** https://leetcode.com/problems/convert-date-to-binary/submissions/1383052957
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```cpp []
class Solution {
private:
    string binaryConversion(int num){
        if (num == 1)
            return to_string(1);
        string bin = "";
        while (num){
            bin = to_string(num % 2) + bin;
            num /= 2;
        }
        cout<<bin<<endl;
        return bin;
    }
public:
    string convertDateToBinary(string date) {
        string year = binaryConversion(stoi(date.substr(0, 4)));
        string month = binaryConversion(stoi(date.substr(5, 2)));
        string day = binaryConversion(stoi(date.substr(8, 2)));
        return year + "-" + month + "-" + day;
    }
};
```