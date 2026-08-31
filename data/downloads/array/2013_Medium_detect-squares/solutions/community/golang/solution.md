# C++ | Golang | Map

**Author:** pikachuu
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-squares/solutions/3402035/](https://leetcode.com/problems/detect-squares/solutions/3402035/)

---

# Code
```
//-----------------------------------------
// C++
//-----------------------------------------
class DetectSquares {
    unordered_map<int, unordered_map<int, int>> Map;
public:
    DetectSquares() {
        
    }
    
    void add(vector<int> point) {
        Map[point[0]][point[1]]++;
    }
    
    int count(vector<int> point) {
        int ans = 0, x1 = point[0], y1 = point[1];
        for(auto &[y2, _]: Map[x1]) {
            if(y2 == y1) continue;
            int dist = abs(y1 - y2);
            ans += Map[x1][y2] * (Map[x1 - dist][y2] * Map[x1 - dist][y1] + Map[x1 + dist][y2] * Map[x1 + dist][y1]);
        }
        return ans;
    }
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * DetectSquares* obj = new DetectSquares();
 * obj->add(point);
 * int param_2 = obj->count(point);
 */


//-----------------------------------------
// Golang
//-----------------------------------------
type DetectSquares struct {
    Map map[int]map[int]int
}


func Constructor() DetectSquares {
    return DetectSquares {
        Map: make(map[int]map[int]int),
    }
}


func (this *DetectSquares) Add(point []int)  {
    if _, ok := this.Map[point[0]]; !ok {
        this.Map[point[0]] = make(map[int]int)
    }
    this.Map[point[0]][point[1]]++
}


func (this *DetectSquares) Count(point []int) int {
    var ans, x1, y1 = 0, point[0], point[1]
    for y2, _ := range this.Map[x1] {
        if y2 == y1 {continue}
        var dist int = y1 - y2
        if y1 - y2 < 0 {dist = y2 - y1}
        ans += this.Map[x1][y2] * (this.Map[x1 - dist][y2] * this.Map[x1 - dist][y1] + this.Map[x1 + dist][y2] * this.Map[x1 + dist][y1])
    }
    return ans
}


/**
 * Your DetectSquares object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(point);
 * param_2 := obj.Count(point);
 */
```