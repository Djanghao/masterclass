# My Intuitive C++ Solution, to solve most of streaming data Problem

**Author:** khalid007
**Votes:** 4
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/3992429/](https://leetcode.com/problems/finding-mk-average/solutions/3992429/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If you have solved other streaming data related problem. You can build this solution based on the solution of other similar problems. One such problem is median in a streaming data. 

# Approach
For this you have to keep in mind few things : 

1. Queue maintaining order of inputs, so that when the size of queue is m, you can easily remove the stale value.
2. Maintain three multiset to track the lowest K, top K and mid elements.
3. Balance the sizes of each multiset at every insertion.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log(m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MKAverage {
    int total;
    int m;
    int k;
    queue<int> recentData;
    multiset<int, greater<int>> smallestK;
    multiset<int> greatestK;
    multiset<int> midElements;
    long midSum;
public:
    MKAverage(int m, int k) {
        total = 0;
        this->m = m;
        this->k = k;
        midSum = 0;
    }

    //   1. < k elements;
    //   2. > k & < 2k elements;
    //   3. > 2k & < m elements;
    //   4. > m elements;
    void addElement(int num) {
        // If we have already m data in queue then remove the stale data
        if(total == m) {
            int stale = recentData.front();

            recentData.pop();
            recentData.push(num);

            // Remove the stale value from the appropriate set containing the value
            if(greatestK.find(stale) != greatestK.end()) {
                greatestK.erase(greatestK.find(stale));
            }
            else if(smallestK.find(stale) != smallestK.end()) {
                smallestK.erase(smallestK.find(stale));
            }
            else {
                // If the value in middle set, update midSum
                midElements.erase(midElements.find(stale));
                midSum -= stale;
            }
            total--;
        }
        else {
            recentData.push(num);
        }


        if(total < k) {
            greatestK.insert(num);
        }
        else if(total < 2*k) {
            greatestK.insert(num);
            int smaller = *greatestK.begin();
            smallestK.insert(smaller);
            greatestK.erase(greatestK.begin());
        }
        else if(total < m) {
            // Insert from Greater to Smaller
            greatestK.insert(num);
            int smaller = *greatestK.begin();
            greatestK.erase(greatestK.begin());
            midElements.insert(smaller);

            // Add smaller value of top k to midSum
            midSum += smaller;
            smaller = *midElements.begin();
            midElements.erase(midElements.begin());
            // Remove the smaller value of mid elements to midSum
            midSum -= smaller;
            smallestK.insert(smaller);

            // Now Balance the size
            if(smallestK.size() > k) {
                int greater = *smallestK.begin();
                smallestK.erase(smallestK.begin());

                midElements.insert(greater);
                midSum += greater;

                if(midElements.size() > m - 2*k) {
                    auto ptr = midElements.end();
                    greater = *(--ptr);
                    midElements.erase(ptr);
                    midSum -= greater;
                    greatestK.insert(greater);
                }
            }
        }

        total++;
    }
    
    int calculateMKAverage() {
        if(total < m) {
            return -1;
        }
        else {
            return midSum/(m-2*k);
        }
    }
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * MKAverage* obj = new MKAverage(m, k);
 * obj->addElement(num);
 * int param_2 = obj->calculateMKAverage();
 */
```