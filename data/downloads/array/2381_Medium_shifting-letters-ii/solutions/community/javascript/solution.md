# Java | JavaScript | C++ Solution.

**Author:** LachezarTsK
**Votes:** 2
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2458369/](https://leetcode.com/problems/shifting-letters-ii/solutions/2458369/)

---

**Java**
```
public class Solution {

    public String shiftingLetters(String input, int[][] shifts) {
        final int ALPHABET_SIZE = 26;
        int[] totalShifts = new int[input.length() + 1];

        for (int[] shift : shifts) {
            int change = (shift[2] == 1) ? 1 : -1;
            totalShifts[shift[0]] += change;
            totalShifts[shift[1] + 1] -= change;
        }

        char[] shiftedLetters = input.toCharArray();
        for (int i = 0; i < input.length(); ++i) {
            int currentShift = (shiftedLetters[i] - 'a' + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                               % ALPHABET_SIZE;
            shiftedLetters[i] = (char) (currentShift + 'a');
            totalShifts[i + 1] += totalShifts[i];
        }

        return String.valueOf(shiftedLetters);
    }
}
```
**JavaScript**
```
/**
 * @param {string} input
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (input, shifts) {
    const  ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const totalShifts = new Array(input.length + 1).fill(0);

    for (let shift of shifts) {
        const change = (shift[2] === 1) ? 1 : -1;
        totalShifts[shift[0]] += change;
        totalShifts[shift[1] + 1] -= change;
    }

    let shiftedLetters = input.split('');
    for (let i = 0; i < input.length; ++i) {
        const currentShift = (input.codePointAt(i) - ASCII_SMALL_CASE_A + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                             % ALPHABET_SIZE;
        shiftedLetters[i] = String.fromCodePoint(currentShift + ASCII_SMALL_CASE_A);
        totalShifts[i + 1] += totalShifts[i];
    }

    return shiftedLetters.join('');
};
```
**C++**
```
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    string shiftingLetters(string input, vector<vector<int>>& shifts) {
        const int ALPHABET_SIZE = 26;
        vector<int> totalShifts(input.length() + 1);

        for (const auto& shift : shifts) {
            int change = (shift[2] == 1) ? 1 : -1;
            totalShifts[shift[0]] += change;
            totalShifts[shift[1] + 1] -= change;
        }

        for (int i = 0; i < input.length(); ++i) {
            int currentShift = (input[i] - 'a' + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                               % ALPHABET_SIZE;
            input[i] = (char) (currentShift + 'a');
            totalShifts[i + 1] += totalShifts[i];
        }

        return input;
    }
};
```