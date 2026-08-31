# C++ Easy Solution | Accepted ✅☑

**Author:** wjeevika
**Votes:** 12
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1609224/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/1609224/)

---

**C++ Code:**
```
bool hasGroupsSizeX(vector<int>& deck) {
        unordered_map<int, int>m;     // order doesn't matter, so we use unordered map
        for(int d : deck)
            m[d]++;    // map created with frequency of each card no.
        int gcd = m[deck[0]];
        for(auto i : m)
            gcd = __gcd(gcd, i.second);    // doing gcd with the frequency of all the cards
        return gcd != 1;    // if gcd is not equal to 1 it means we can create groups of size >= 2.
    }
```

Here, we have taken gcd because:
```deck = [1,1,1,1,3,3,3,3,3,3]```
Inside map we will have
```
No.  Frequency
1   -   4
3   -   6
```
So we can divide in groups as:
`[1,1], [1,1], [3,3], [3,3], [3,3]`
So, that's why you may notice now, we can create group of at least gcd(4, 6)
where 4 and 6 is the frequency of number of cards.

__________________________________________
Upvotes would be highly appreciated.