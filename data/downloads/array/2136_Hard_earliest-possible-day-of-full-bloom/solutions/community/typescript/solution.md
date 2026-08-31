# Greedy || Sorting

**Author:** Adarsh0302
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/6078828/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/6078828/)

---

# Intuition
The plant which will take maximum time to grow will give maximum to plant other plant.

# Approach
sort the growtime in descending order. calculate blossom time for each plant while iterating over the plants identify the max time which any plant will take to blossom.

store in a variable when did last plant started to grow so from that day you can start planting the current plant.

#### Formula ----> *blossom time for plant is plant time + grow time + last plant when it started to grow*

and then update last plant grow time (starting point)

# Complexity
- Time complexity:
$$O(nlogn)$$ 

- Space complexity:
$$O(n)$$ 

# Code
```cpp []
class Solution {
public:
    int earliestFullBloom(vector<int>& plantTime, vector<int>& growTime) {
        int n = plantTime.size();

        vector<pair<int,int>> data(n); //{growtime,plantime}
        for(int i = 0;i<n;i++){
            data[i] = {growTime[i],plantTime[i]};
        }

        sort(data.rbegin(),data.rend());//reverse sort

        int minDay = 0;
        int prevPlantTime = 0;

        for(int i = 0;i<n;i++){
            int plantTime = data[i].second;
            int growTime = data[i].first;

            int blossom = prevPlantTime + growTime + plantTime;//blossom time
            prevPlantTime += plantTime;

            minDay = max(minDay,blossom);//update max day
        }

        return minDay;
    }
};
```
``` TypeScript []
function earliestFullBloom(plantTime: number[], growTime: number[]): number {
    const n = growTime.length;

    let data:[number,number][] = growTime.map((grow,index) => [grow,plantTime[index]]);

    data.sort((a,b) => b[0] - a[0]);

    let minDay = 0;
    let prevTime = 0;

    for(let i = 0;i<n;i++){
        const [grow,plant] = data[i];

        let blossom = prevTime + grow + plant;
        prevTime += plant;

        minDay = Math.max(minDay,blossom);
    }

    return minDay;
};
```