# JS Solution pre-determining toughest level

**Author:** akshajmody
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2349547/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/2349547/)

---

We can determine which level the armour will be best used by calculating the level which does the highest damage. This way when we iterate through the levels, we know which one to use the armour on best.

```
var minimumHealth = function (damage, armor) {
  let health = 1;
  const max = Math.max(...damage);
  let armorLevel = damage.indexOf(max);
  for (let i = 0; i < damage.length; i++) {
    if (i === armorLevel) {
      if (damage[i] - armor > 0) {
        health += damage[i] - armor;
      }
      armorLevel = null;
      continue;
    }
    health += damage[i];
  }
  return health;
};
```