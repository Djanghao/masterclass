# Recursion->Top Down-> Bottom UP | DP  | Easy to understand

**Author:** sudher
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653075/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5653075/)

---

## RECURSION
```
class Solution {
    //Considering 0 indexed hours
    //drinkType = 0 ===> drink1
    //drinkType = 1 ===> drink2
    long solve(int[] drink1, int[] drink2, int currHour, int currDrinkType)
    {
        if (currHour >= drink1.length)
            return 0;
        
        long drinkBoost = (currDrinkType == 0)? drink1[currHour] : drink2[currHour];
        
        long noTypeSwitch = drinkBoost + solve(drink1, drink2, currHour + 1, currDrinkType);
        long typeSwitch = drinkBoost + solve(drink1, drink2, currHour + 2, 1 - currDrinkType);
        //if you switch types you need to skip next hour so (currHour + 2)
        //(1 - currDrinkType) switches the type (0 to 1) and (1 to 0)
        
        return Math.max(noTypeSwitch, typeSwitch);
        
    }
    public long maxEnergyBoost(int[] energyDrinkA, int[] energyDrinkB) 
    {
        long a = solve(energyDrinkA, energyDrinkB, 0, 0);
        long b = solve(energyDrinkA, energyDrinkB, 0, 1);
        
        return Math.max(a, b);
    }
}
```

## MEMOIZATION [TOP-DOWN]
```
class Solution {
    //Considering 0 indexed hours
    //drinkType = 0 ===> drink1
    //drinkType = 1 ===> drink2
    long solve(int[] drink1, int[] drink2, long[][] dp, int currHour, int currDrinkType)
    {
        if (currHour >= drink1.length)
            return 0;
        if (dp[currDrinkType][currHour] != -1)
            return dp[currDrinkType][currHour];
        
        long drinkBoost = (currDrinkType == 0)? drink1[currHour] : drink2[currHour];
        
        long noTypeSwitch = drinkBoost + solve(drink1, drink2, dp, currHour + 1, currDrinkType);
        long typeSwitch = drinkBoost + solve(drink1, drink2, dp, currHour + 2, 1 - currDrinkType);

        return dp[currDrinkType][currHour] = Math.max(noTypeSwitch, typeSwitch);
        
    }
    public long maxEnergyBoost(int[] energyDrinkA, int[] energyDrinkB) 
    {
        long[][] dp = new long[2][energyDrinkA.length];
        Arrays.fill(dp[0], -1);
        Arrays.fill(dp[1], -1);
        
        long a = solve(energyDrinkA, energyDrinkB, dp, 0, 0);
        long b = solve(energyDrinkA, energyDrinkB, dp, 0, 1);
        return Math.max(a, b);
        
    }
}
```

## BOTTOM-UP DP
```
class Solution {
    //Considering 0 indexed hours
    //drinkType = 0 ===> drink1
    //drinkType = 1 ===> drink2
    public long maxEnergyBoost(int[] drink1, int[] drink2) 
    {
        int n = drink1.length;
		
		 //dp[drinkType][hour]
        long[][] dp = new long[2][n];
        
         //in the last hour, for any given type we have only one option i.e to "DRINK"
        dp[0][n - 1] = drink1[n - 1];
        dp[1][n - 1] = drink2[n - 1];

        for (int currHour = n - 2; currHour >= 0; currHour--)
        {
            for (int currDrinkType = 0; currDrinkType <= 1; currDrinkType++)
            {
                long drinkBoost = (currDrinkType == 0)? drink1[currHour] : drink2[currHour];
                
                long noTypeSwitch = drinkBoost + dp[currDrinkType][currHour + 1];
                long typeSwitch = drinkBoost + ( (currHour + 2 >= n)? 0 : dp[1 - currDrinkType][currHour + 2] );
                
                dp[currDrinkType][currHour] = Math.max(noTypeSwitch, typeSwitch);
            }
        }
        return Math.max(dp[0][0], dp[1][0]);
        
    }
}
```