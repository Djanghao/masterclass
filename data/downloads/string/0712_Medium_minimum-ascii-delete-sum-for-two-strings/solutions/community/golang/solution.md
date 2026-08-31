# 🚀 Easy DP Minimum ASCII Delete Sum for Two Strings

**Author:** phistellar
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840664/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840664/)

---

First of all, I would like to thank [vanAmsen](https://youtu.be/OT6zcEATv1c) for an excellent video explanation on how to solve this problem. That explanation has been instrumental in helping me understand the solution. For those who are interested in additional implementations, you can find solutions in Rust, Go, Ruby, TypeScript, and Swift in this post.

# Intuition

The task at hand is to find the minimum ASCII sum of deleted characters that will make two given strings equal. My initial thought was to use dynamic programming (DP) to solve this. We essentially want to compare every character in one string with every character in the other. If they match, no deletion is required. But if they don't match, we must decide which character to delete. The decision would be based on minimizing the ASCII sum of the deleted characters.

# Approach

This problem was solved by using a dynamic programming approach where we initialize a vector `prev_row` with the cumulative ASCII sum of the characters in `s2`. Then for each character in `s1`, we create a new vector `curr_row` and fill it with the minimum ASCII sum obtained either by deleting the current character from `s1` or `s2`, or by not deleting anything if the current characters from both strings are equal. At the end of each iteration, we set `prev_row` to `curr_row` and continue with the next character in `s1`. The last entry in `prev_row` at the end of all iterations will give the minimum ASCII sum of the deleted characters to make `s1` and `s2` equal.

# Complexity

- Time complexity: The time complexity is O(n * m), where n and m are the lengths of `s1` and `s2`, respectively. This is because we iterate through all characters of both strings.

- Space complexity: The space complexity is also O(n * m) as we store the minimum ASCII sum for all combinations of substrings of `s1` and `s2` in the DP table.

# Code

``` Rust []
impl Solution {
    pub fn minimum_delete_sum(s1: String, s2: String) -> i32 {
        let mut prev_row = vec![0; s2.len() + 1];
        let s1 = s1.chars().collect::<Vec<_>>();
        let s2 = s2.chars().collect::<Vec<_>>();

        for j in 1..=s2.len() {
            prev_row[j] = prev_row[j - 1] + s2[j - 1] as i32;
        }

        for i in 1..=s1.len() {
            let mut curr_row = vec![prev_row[0] + s1[i - 1] as i32];
            for j in 1..=s2.len() {
                if s1[i - 1] == s2[j - 1] {
                    curr_row.push(prev_row[j - 1]);
                } else {
                    curr_row.push(std::cmp::min(prev_row[j] + s1[i - 1] as i32, curr_row[j - 1] + s2[j - 1] as i32));
                }
            }
            prev_row = curr_row;
        }

        *prev_row.last().unwrap()
    }
}
```
``` Go []
func minimumDeleteSum(s1 string, s2 string) int {
    prev_row := make([]int, len(s2) + 1)
    for j := 1; j <= len(s2); j++ {
        prev_row[j] = prev_row[j - 1] + int(s2[j - 1])
    }

    for i := 1; i <= len(s1); i++ {
        curr_row := []int{prev_row[0] + int(s1[i - 1])}
        for j := 1; j <= len(s2); j++ {
            if s1[i - 1] == s2[j - 1] {
                curr_row = append(curr_row, prev_row[j - 1])
            } else {
                curr_row = append(curr_row, min(prev_row[j] + int(s1[i - 1]), curr_row[j - 1] + int(s2[j - 1])))
            }
        }
        prev_row = curr_row
    }

    return prev_row[len(prev_row) - 1]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
``` Ruby []
# @param {String} s1
# @param {String} s2
# @return {Integer}
def minimum_delete_sum(s1, s2)
    prev_row = Array.new(s2.length + 1, 0)
    (1..s2.length).each { |j| prev_row[j] = prev_row[j - 1] + s2[j - 1].ord }

    (1..s1.length).each do |i|
        curr_row = [prev_row[0] + s1[i - 1].ord]
        (1..s2.length).each do |j|
            if s1[i - 1] == s2[j - 1]
                curr_row << prev_row[j - 1]
            else
                curr_row << [prev_row[j] + s1[i - 1].ord, curr_row[j - 1] + s2[j - 1].ord].min
            end
        end
        prev_row = curr_row
    end

    prev_row[-1]
end
```
``` TypeScript []
function minimumDeleteSum(s1: string, s2: string): number {
    let prev_row: number[] = new Array(s2.length + 1).fill(0);
    for (let j = 1; j <= s2.length; j++) {
        prev_row[j] = prev_row[j - 1] + s2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= s1.length; i++) {
        let curr_row: number[] = [prev_row[0] + s1.charCodeAt(i - 1)];
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                curr_row.push(prev_row[j - 1]);
            } else {
                curr_row.push(Math.min(prev_row[j] + s1.charCodeAt(i - 1), curr_row[j - 1] + s2.charCodeAt(j - 1)));
            }
        }
        prev_row = curr_row;
    }

    return prev_row[prev_row.length - 1];
}
```
``` Swift []
class Solution {
    func minimumDeleteSum(_ s1: String, _ s2: String) -> Int {
        var prevRow = [Int](repeating: 0, count: s2.count + 1)
        let s1 = Array(s1.unicodeScalars)
        let s2 = Array(s2.unicodeScalars)
        
        for j in 1...s2.count {
            prevRow[j] = prevRow[j - 1] + Int(s2[j - 1].value)
        }

        for i in 1...s1.count {
            var currRow = [prevRow[0] + Int(s1[i - 1].value)]
            for j in 1...s2.count {
                if s1[i - 1] == s2[j - 1] {
                    currRow.append(prevRow[j - 1])
                } else {
                    currRow.append(min(prevRow[j] + Int(s1[i - 1].value), currRow[j - 1] + Int(s2[j - 1].value)))
                }
            }
            prevRow = currRow
        }
        return prevRow.last!
    }
}
```
I hope this walkthrough helps you understand how to solve this problem. If you have any questions or comments, please feel free to share them!