# C++ || Approach Explained || Greedy

**Author:** MohakHarjani
**Votes:** 8
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754352/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754352/)

---

**GREEDY LOGIC**

1)We can only save time while the flower is **"Growing"**. We are not occupied while some flower is growing
2)So to save time
=>Pick the flower with highest growing time at each step
=>More growing time means more free time with us
=>More free time means we can occupy ourselves in planting some other flower
```
class Flower{
    public : 
    int growTime, plantTime;
    Flower(int growTime, int plantTime)
    { this->growTime = growTime; this->plantTime = plantTime; }
};
class Solution {
public:
    int earliestFullBloom(vector<int>& plantTime, vector<int>& growTime)
    {
        vector<Flower>flowers;
        int flowerCount = plantTime.size();
        for (int i = 0; i < flowerCount; i++) flowers.push_back(Flower(growTime[i], plantTime[i]));
        //Flower(a, b) creates a static object of class Flower class
        
        //=========================================================
        //Sort the flowers on basis of decreasing growTime
        sort(flowers.begin(), flowers.end(), [](Flower& a, Flower& b)->bool{
            return (a.growTime > b.growTime);
        });
        //========================================================
        //currTime denotes the time at which I finished planting the current flower
        //After the currentTime I am now free to plant another plant while the current flower grows 
        //  SAVE TIME :)
        int currTime = 0, mxBloomTime = 0;
        for (Flower flower : flowers)
        {
            currTime += flower.plantTime; 
            int bloomTime = currTime + flower.growTime; //current flower will bloom at bloonTime
            mxBloomTime = max(mxBloomTime, bloomTime);
        }
        //=======================================================
        return mxBloomTime;
        
    }
};
```