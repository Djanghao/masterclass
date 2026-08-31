# JAVA simple solution 100% faster

**Author:** 0xShubhamSolanki
**Votes:** 57
**Link:** [https://leetcode.com/problems/car-fleet/solutions/2013259/](https://leetcode.com/problems/car-fleet/solutions/2013259/)

---


     int res = 0;
           double[] timeArr = new double[target];
           for (int i = 0; i < position.length; i++)
            {
                timeArr[position[i]]= (double)(target - position[i]) / speed[i];
            }
            double prev = 0.0;
            for (int i = target-1; i >=0 ; i--)
            {
                double cur = timeArr[i];
                if (cur > prev)
                {
                    prev = cur;
                    res++;
                }
            }
            return res;   
