# [C++] Explaination and Intuition

**Author:** iShubhamRana
**Votes:** 10
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/1701971/](https://leetcode.com/problems/decode-xored-permutation/solutions/1701971/)

---

[https://leetcode.com/problems/decode-xored-array/](http://)
First prerequisite is this easy problem above.

After doing this you already know that if we get to know even **one element** of the permutation array then we can **decode** the entire encoded array. But how to get that one lement.

let there be 4 elements in encoded. [6,5,4,6]
and encoded have 5 element a , b , c , d , e respectively
we know:
a^b = 6
b^c = 5
c^d = 4
d^e = 6

if we xor all of them , it doesnt actually beneits us you can try.
1. But if we xor them by skipping an index it actually benefits us.
(a^b) ^(c^d)  . This way on xoring we get xor of all elements except the last.

2. We can easily get  xor of  all elements from 1 to n+1 (n=size of encoded) . 

If we xor the results from point1 and point2 we will get the last element of encoded array.
as same same elements will xor themselves to zero.


From here you can easily solve ahead . Hope it helps
Please upvote.




```
class Solution {
public:
vector<int> decode(vector<int>& encoded) {

    int n = encoded.size();

    int temp = 0;
    for (int i = 0; i < n ; i += 2) {
        temp = temp ^ encoded[i];
    }
    for (int i = 1; i <= n + 1; i++) {
        temp = temp ^ i;
    }

    vector<int> ans;
    ans.push_back(temp);

    int j = n - 1;
    while (j >= 0) {
        ans.push_back(ans[ans.size() - 1] ^ encoded[j--]);
    }

    reverse(ans.begin(), ans.end());
    return ans;
}
};
```