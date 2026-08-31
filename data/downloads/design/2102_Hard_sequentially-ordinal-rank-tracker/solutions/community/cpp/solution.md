# [C++] Priority queue : Min and Max heap

**Author:** abhinandan96
**Votes:** 4
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/1958764/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/1958764/)

---

Two heaps: Min heap and Max heap.
Min heap always stores only "k" number of elements = The number of times get() is called. (say k). Each time get() is called min_heap size increases by 1 and the kth smallest element is pushed into it.
Max heap maintains the list of elements smaller than the kth smallest element at all times. This is done by pushing the latest element from add into the min_heap and then popping the k+1th element and pushing it into the max_heap

```
class SORTracker {
private:
	// Custom Min_comp and Max_comp operator to maintain score and lexicographical order
    struct Min_comp {
        bool operator()(const pair<int, string>& a, const pair<int, string>& b) {
            if (a.first != b.first) return (a.first > b.first);
            else return (a.second < b.second);
        }
    };
    struct Max_comp {
        bool operator()(const pair<int, string>& a, const pair<int, string>& b) {
            if (a.first != b.first) return (a.first < b.first);
            else return (a.second > b.second);
        }
    };
    priority_queue<pair<int, string>, vector<pair<int, string>>, Min_comp> min_heap;
    priority_queue<pair<int, string>, vector<pair<int, string>>, Max_comp> max_heap;
    
public:
    SORTracker() {    
    }
    
    void add(string name, int score) {
		// Add the new name to min_heap and let min_heap automatically weed out the kth sorted element.
		// Size k is maintained because mn_heap size increases by 1 each time get() is called
        min_heap.push(make_pair(score, name));
        max_heap.push(min_heap.top());
        min_heap.pop();
    }
    
    string get() {
		// No need to keep track of the number of times get is called, as min heap size increases automatically 
        auto ans = max_heap.top();
        min_heap.push(ans);
        max_heap.pop();
        return ans.second;
    }
};
```