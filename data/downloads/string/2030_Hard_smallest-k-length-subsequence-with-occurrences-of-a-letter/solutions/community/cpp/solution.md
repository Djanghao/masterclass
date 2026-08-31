# Concise C++ O(N) Stack Solution

**Author:** SailorMoons
**Votes:** 10
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1500365/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1500365/)

---

This is the C++ version of sguaaa's solution to help anyone that's more familiar with C++.
All credit for the original idea and implementation goes to him, original post here:
https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/discuss/1500174/PythonJava-O(N)-greedy-solution-using-a-stack

```
string smallestSubsequence(string s, int k, char target, int reps) {
    int N = s.length(), remain = count(s.begin(), s.end(), target);
    string stack;

    for (int i = 0; i < N; i++) {
        while (!stack.empty() && stack.back() > s[i] && (N - i + stack.length() > k) && (stack.back() != target || remain > reps)) {
            if (stack.back() == target)
                reps++;
            stack.pop_back();
        }

        if (stack.length() < k) {
            if (s[i] == target || k - (int)stack.length() > reps) {
                stack += s[i];
                if (s[i] == target)
                    reps--;
            }
        }

        if (s[i] == target)
            remain--;
    }
    return stack;
}
```