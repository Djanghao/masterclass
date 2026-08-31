# 100% faster🔥|| c++ || easy solution ✔|| set + sliding window

**Author:** Eren_s
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4603365/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4603365/)

---



```
class Solution {
 public:

  long long minimumCost(vector<int>& nums, int k, int dist) {
    // first element will be included always as 1st segment starts from it
    long long s = nums[0];
    
    // now b/w second and last segment diff will be at most dist
    // so now question becomes sliding window type 
    // optimal solution is to choose min sum k-1 elements across the windows 
    // now tc accetable is o(n*logn) and we have to choose first k-1 elements from window and add or remove elements from  window in further steps  such that their order remains same so after a lot of brainstorming set is best option
    set<pair<int, int>> ms;
    k--;
    for (int i = 1; i <= dist + 1; i++) {
      ms.insert({nums[i], i});
    }
    long long mx = 0;
    auto it = ms.begin();
    int kk = k;
    while (k > 1) {
      mx += (*it).first;
      it++, k--;
    }
    mx += (*it).first;
    s += mx;
    int j = 1;

    for (int i = dist + 2; i < nums.size(); i++) {
      if ((*it).second == j) {
        mx -= nums[j];

        ms.insert({nums[i], i});
        // mx+=nums[i];
        if (nums[i] < (*it).first) {
          mx += nums[i];
          it--;
        } else {
          it++;
          mx += (*it).first;
        }
        ms.erase({nums[j], j});

      } else if (nums[j] >= (*it).first) {
        if (nums[j] == (*it).first && j < (*it).second) {
          ms.erase({nums[j], j});
          mx -= nums[j];
          ms.insert({nums[i], i});

          if (nums[i] >= (*it).first) {
            it++;
            mx += (*it).first;
          } else
            mx += nums[i];
          //  it++;
        } else {
          ms.erase({nums[j], j});
          ms.insert({nums[i], i});
          if (nums[i] < (*it).first) {
            mx -= (*it).first;
            mx += nums[i];
            it--;
          }
        }
      } else {
        ms.erase({nums[j], j});
        mx -= nums[j];
        if (nums[i] < (*it).first) {
          ms.insert({nums[i], i});

          mx += nums[i];

        }

        else {
          ms.insert({nums[i], i});

          it++;
          mx += (*it).first;
        }
      }
      j++;

      s = min(s, mx + nums[0] * 1ll);
    }

    return s;
  }
  // To debug the code
    void print(set<pair<int, int>> s, int k) {
    int sm = 0;
    for (auto it = s.begin(); it != s.end(); it++) {
      if (k > 0) sm += (*it).first;
      k--;
      cout << "{" << (*it).first << " " << (*it).second << "} ,";
    }
    cout << sm << "|" << endl;
  }
};

```

**Please UPVOTE if you like it , it will motivate me to post such solutions with explanation.**