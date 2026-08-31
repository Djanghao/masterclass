# C# Precomputed Positions

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5767237/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5767237/)

---

```csharp
public class Robot
{
    int steps, mod;
    List<(int[] Pos, string Dir)> positions;

    public Robot(int width, int height)
    {
        var w = width - 1;
        var h = height - 1;

        mod = (h + w) * 2;
        positions = new(mod + 1);

        for (var x = 1; x <= w; x++)
            positions.Add(([x, 0], "East"));

        for (var y = 1; y <= h; y++)
            positions.Add(([w, y], "North"));

        for (var x = w - 1; x >= 0; x--)
            positions.Add(([x, h], "West"));

        for (var y = h - 1; y >= 0; y--)
            positions.Add(([0, y], "South"));

        positions.Insert(0, positions[^1]);
        positions.RemoveAt(positions.Count - 1);
    }

    public void Step(int num) => steps += num;

    public int[] GetPos() => positions[steps % mod].Pos;

    public string GetDir() => steps == 0 ? "East" : positions[steps % mod].Dir;
}
```