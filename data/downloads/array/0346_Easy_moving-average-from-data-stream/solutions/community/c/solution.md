# C++ | 90%time quicker than all solutions. Newbie queue solution. Critiques welcome

**Author:** nestea132
**Votes:** 9
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/2140231/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/2140231/)

---

```

class MovingAverage {
    private:
    queue<double>numList;
    double number = 0;
    double sum;
    int window;
    
    public:
    MovingAverage(int size) {
        window = size;
    }
    double next(int val) {
    numList.push(val);
        sum = sum + val;
        number++;
        if(number > window){
            sum = sum - numList.front();
            numList.pop();
            number = window;
        }
        return sum/number;
    }
};
```