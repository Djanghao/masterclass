# C++ O(n) to O(1) memory || Queue || Count

**Author:** NeerajSati
**Votes:** 27
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015022/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015022/)

---

We can just keep the count of numbers we have pushed till now which were of value given
if this number is greater than or equal to k then we can return true else it is false
we will keep increasing the count of numbers equal to value and if any other number comes we will just set count as 0
    
Auxiliary Space: O(1)
```
class DataStream {
public:
    int val = 0, kmax = 0;
    int valCount = 0;
    DataStream(int value, int k) {
        val = value;
        kmax = k;
    }
    
    bool consec(int num) {
        if(num == val)
            valCount++;
        else
            valCount = 0;
        return valCount >= kmax;
    }
};
```

There can also be a variation of this question where we are asked to return true if last k values are equal(not necessarily equal to value)
we can use this logic there, but I just thought of this approach and wanted to share this with you all

For this, we can just maintain a queue q of length k and we keep pushing the numbers in this queue and adding this number to the hashmap
whenever the size exceeds k we can pop it from the queue and remove this number from hashmap
now if the size of queue is less than k we will return false
Else, we will check the size of our hashmap, if it is 1, i.e, last k numbers pushed are same so return true
    
Auxiliary Space: O(k)
```
class DataStream {
public:
    int val = 0, kmax = 0;
    queue<int> q;
    unordered_map<int,int> hm;
    DataStream(int value, int k) {
        val = value;
        kmax = k;
    }
    
    bool consec(int num) {
        q.push(num);
        hm[num]++;
        if(q.size() > kmax){
            int x = q.front();
            q.pop();
            hm[x]--;
            if(hm[x] == 0){
                hm.erase(x);
            }
        }
        if(q.size() < kmax)
            return false;
        if(hm.size() == 1){
            // This part is only done to verify if the queue only has all the elements of value "value"
            for(auto it:hm){
                if(it.first == val)
                    return true;
                else
                    return false;
            }
        }
        return false;
    }
};
```
