# The Easiest and Concise O(N) Solution | Beats 100%

**Author:** Predator_2K40
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2480239/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2480239/)

---

**Code:-**

```
    public int minNumberOfHours(int initialEnergy, int initialExperience, int[] energy, int[] experience)
    {
        int count=0;
        for (int i = 0; i < energy.length; i++)
        {
            if (initialExperience <= experience[i])
            {
                count+= experience[i]-initialExperience+1;
                initialExperience+= experience[i]-initialExperience+1;     // if current experience < required experience, then we first bridge the gap and make the current experience more than the required experience      
            }
            initialEnergy-= energy[i];     // decrementing energy           
            initialExperience+= experience[i];     // incrementing experience
        }
        if (initialEnergy < 1)
            count+= 1-initialEnergy;     // if energy is still greater than 0, then no need of training 
        return count;
    }
```	