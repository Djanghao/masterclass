# C++ Easy to understand solution

**Author:** sameer143
**Votes:** 2
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/521261/](https://leetcode.com/problems/confusing-number-ii/solutions/521261/)

---

Concept:
We start with single digit number and generate all combinations which contain 0, 1, 6, 8, 9.
For example,
1 generates 11, 16, 18, 19
6 generates 61, 66, 68, 69
...
and so on...

Now from the generated number generate more numbers
e.g. 11 generates 111, 116, 118, 119
61 generates 611, 616, 618, 619, etc.

Now, the task is just to check if they are valid and below N :)

Happy coding!


````
class Solution {
    int count;

    long long getDigits(long long num)
    {
        static int map[] = { 0, 1, -1, -1, -1, -1, 9, -1, 8, 6 };
        long long res = 0;
        while (num)
        {
            int d = num % 10;
            res *= 10;
            res += map[d];
            num /= 10;
        }
        return res;
    }

    void gen(vector<int> &v, long long num, int N)
    {
        if (num > N) return;
        for (int i : v)
        {
            long long temp = num * 10 + i;
            if (temp <= N)
            {
                long long res = getDigits(temp);
                if (res != temp)
                {
                    //cout << temp << " ";
                    count++;
                }
                gen(v, temp, N);
            }
        }
    }

public:
    int confusingNumberII(int N) {
        count = 2;
        vector<int> v = { 0, 1, 6, 8, 9 };
        for (int i = 1; i < v.size(); i++)
        {
            gen(v, v[i], N);
        }
        return count;
    }
};
````