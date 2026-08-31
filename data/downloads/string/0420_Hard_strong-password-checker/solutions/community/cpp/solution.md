# [C++] Easy to Understand Solutions || Commented Code

**Author:** nitishhsinghhh
**Votes:** 26
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/2245802/](https://leetcode.com/problems/strong-password-checker/solutions/2245802/)

---

# Problem Statement

This problem requires modifying a given password string to ensure it meets specific strength criteria. You are to return the minimum number of steps required to make the password strong, or 0 if it is already strong.

**Strength Criteria:**
A strong password must satisfy all of the following:

Length: It has at least 6 characters and no more than 20 characters.
Character Diversity: It contains at least one lowercase letter, one uppercase letter, and one digit.
No Triple Repeats: It does not contain three consecutive repeating characters.

**Allowed Modifications:**
In one step, we can:
Insert one character into the password.
Delete one character from the password.
Replace one character in the password with another character.

**Constraints:**
- 1 <= password.length <= 50
- password consists of letters, digits, dot '.' or exclamation mark '!'.

# Solution

The basic principle is straightforward: if we want to make MINIMUM changes to turn the input string into a strong password, each change made should fix as many problems as possible.

Let's divide the problem into three sub-problems
1. The password has less than 6 characters.
2. The length of password is between 6 and 20 characters, both included.
3. And the string length is greater than 20 characters.

Now a strong password should have at least one [**lowercase**](https://docs.microsoft.com/en-us/dotnet/api/system.char.islower?view=net-6.0) letter, at least one [**uppercase**](https://docs.microsoft.com/en-us/dotnet/api/system.char.isupper?view=net-6.0) letter, and at least one [**digit**](https://docs.microsoft.com/en-us/dotnet/api/system.char.isdigit?view=net-6.0). The methoid 'GetRequiredChar' checks for the three conditions.

The first two cases are easy. When the string length is greater than 20 characters, we can optimize the edits of triplets by considering three cases:

* When the sequences of the same character are evenly divisible by 3
* When they have one extra character
* and when they are one character off from being evenly divisible by 3

length%3 == 0 should have higher priority 
length%3 == 1 second
length%3 == 2 lowest

For any repeating sequences with length % 3 == 0, we can reduce one replacement by deleting one character. For any repeating sequences with length % 3 == 1, we can reduce one replacement by deleting two character. For the remaining sequences, we can reduce every replacement by deleting three character.

```C++ []
// GCC 13.1 (C++23)

#include <iostream>
#include <bitset>
#include <list>
#include <string>
#include <cassert>
#include <algorithm>

using std::bitset;
using std::cout;
using std::endl;
using std::list;
using std::max;
using std::string;

class Solution {
public:
    int strongPasswordChecker(string s) {
        bitset<3> requirements{111}; 
        list<int> repeats;         
        auto it = s.begin(), it2 = s.end();
        while (it != s.end()) {
            if (*it != *it2) {
                if (requirements.test(0) && islower(*it))
                    requirements.reset(0);
                if (requirements.test(1) && isupper(*it))
                    requirements.reset(1);
                if (requirements.test(2) && isdigit(*it))
                    requirements.reset(2);
            } else {
                while (it != s.end() && *it == *it2)
                    ++it;
                if (distance(it2, it) > 2)
                    repeats.push_back(distance(it2, it));
                if (it != s.end())
                    continue;
                else
                    break;
            }
            it2 = it;
            ++it;
        }
        repeats.sort([](const int &lhs, const int &rhs) { return (lhs % 3) < (rhs % 3); });
        int ans{0}, len{static_cast<int>(s.size())};
        while (len > 20) {
            if (!repeats.empty()) {
                if (repeats.front() == 3)
                    repeats.pop_front();
                else {
                    --repeats.front();
                    repeats.sort([](const int &lhs, const int &rhs) { return (lhs % 3) < (rhs % 3); });
                }
                ++ans;
                --len;
            }
            else {
                ans += len - 20;
                len = 20;
            }
        }
        int rep_ins{0};
        while (!repeats.empty()) {
            rep_ins += repeats.front() / 3;
            repeats.pop_front();
        }
        if ((len + rep_ins) < 6) 
            rep_ins += 6 - len - rep_ins;
        ans += max(static_cast<int>(requirements.count()), rep_ins);
        return ans;
    }
};

// Unit test cases to validate the strongPasswordChecker function
void unitTestCases() {
    Solution sol;

    // Example 1 - Expected to pass
    string password1 = "a";
    int result1 = sol.strongPasswordChecker(password1);
    assert(result1 == 5);
    cout << "Example 1 - Output: " << result1 << endl;

    // Example 2 - Expected to pass
    string password2 = "aA1";
    int result2 = sol.strongPasswordChecker(password2);
    assert(result2 == 3);
    cout << "Example 2 - Output: " << result2 << endl;

    // Example 3 - Expected to pass
    string password3 = "1337C0d3";
    int result3 = sol.strongPasswordChecker(password3);
    assert(result3 == 0);
    cout << "Example 3 - Output: " << result3 << endl;

    // Additional Test 1 - Expected to pass
    string password4 = "aaaaaaaAAAAAA123456"; // Updated test case
    int result4 = sol.strongPasswordChecker(password4);
    assert(result4 == 4); 
    cout << "Additional Test 1 - Output: " << result4 << endl;

    // Additional Test 2 - Needs closer inspection
    string password5 = "aaaAAA123";
    int result5 = sol.strongPasswordChecker(password5);
    cout << "Additional Test 2 - Output: " << result5 << endl;
    assert(result5 == 2); 

    cout << "All tests passed!" << endl;
}

int main() {
    unitTestCases();
    return 0;
}
```

# Frequently encountered in technical interviews
The provided code contains a list of companies and their interview frequencies, which has been a frequently asked question in technical interviews.

```cpp
std::vector<std::pair<std::string, int>> interview_frequency = {{"Amazon", 6},
                                                                {"Google", 3}};
```