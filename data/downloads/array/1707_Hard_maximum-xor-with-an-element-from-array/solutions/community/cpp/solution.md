# Simple and Clean Code || Trie

**Author:** Karanveer__Singh
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/1910287/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/1910287/)

---

```
class Node {
private:
    Node *links[2];

public:
    bool containsKey(int bit) {
        return (links[bit] != NULL);
    }

    Node *get(int bit) {
        return links[bit];
    }

    void put(int bit, Node *node) {
        links[bit] = node;
    }
};

class Trie {
private:
    Node *root;

public:
    Trie() {
        root = new Node();
    }

    void insert(int num) {
        Node *node = root;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (!node->containsKey(bit)) {
                node->put(bit, new Node());
            }
            node = node->get(bit);
        }
    }

    int getMax(int num) {
        Node *node = root;
        int maxNum = 0;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (node->containsKey(1 - bit)) {
                maxNum = maxNum | (1 << i);
                node = node->get(1 - bit);
            }
            else {
                node = node->get(bit);
            }
        }
        return maxNum;
    }
};

class Solution {
public:
    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        sort(nums.begin(), nums.end());
        vector<pair<int, pair<int, int> > > offlineQueries;
        vector<int> ans(queries.size(), 0);

        for (int i = 0; i < queries.size(); i++)
            offlineQueries.push_back({queries[i][1], {queries[i][0], i}});

        sort(offlineQueries.begin(), offlineQueries.end());

        int i = 0, n = nums.size();
        Trie t;

        for (int k = 0; k < queries.size(); k++) {
            int ai = offlineQueries[k].first;
            int xi = offlineQueries[k].second.first;
            int qIndx = offlineQueries[k].second.second;

            while (i < n && nums[i] <= ai) {
                t.insert(nums[i]);
                i++;
            }

            if (i == 0)  ans[qIndx] = -1;
            else    ans[qIndx] = t.getMax(xi);
        }

        return ans;
    }
};
```