# C# | Priority Queue |

**Author:** DanyloKarachentsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/4239845/](https://leetcode.com/problems/campus-bikes/solutions/4239845/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
 private Dictionary<int, (int X, int Y)> _unassignedWorkers = new Dictionary<int, (int X, int Y)>();
    private Dictionary<int, (int X, int Y)> _unassignedBikes = new Dictionary<int, (int X, int Y)>();
    
    class Assignment : IComparable<Assignment>
    {
        public int Distance { get; set; }
        
        public int WorkerId { get; set; }
        
        public int BikeId { get; set; }

        public Assignment(int distance, int workerId, int bikeId)
        {
            Distance = distance;
            WorkerId = workerId;
            BikeId = bikeId;
        }

        public int CompareTo(Assignment? other)
        {
            if (other.Distance == Distance)
            {
                if (other.WorkerId == WorkerId)
                {
                    return BikeId.CompareTo(other.BikeId);
                }

                return WorkerId.CompareTo(other.WorkerId);
            }

            return Distance.CompareTo(other.Distance);
        }
    }
    public int[] AssignBikes(int[][] workers, int[][] bikes)
    {
        Initialize(_unassignedWorkers, workers);
        Initialize(_unassignedBikes, bikes);

        var result = new int[workers.Length];
        var distances = new PriorityQueue<Assignment, Assignment>();
            
        foreach (var worker in _unassignedWorkers)
        {
            foreach (var bike in _unassignedBikes)
            {
                var assignment = new Assignment(CalculateDistance(worker.Value, bike.Value), worker.Key, bike.Key);
                distances.Enqueue(assignment, assignment);
            }
        }

        while (_unassignedWorkers.Count != 0)
        {
            var currentAssignment = distances.Dequeue();

            if (_unassignedWorkers.ContainsKey(currentAssignment.WorkerId) &&
                _unassignedBikes.ContainsKey(currentAssignment.BikeId))
            {
                _unassignedWorkers.Remove(currentAssignment.WorkerId);
                _unassignedBikes.Remove(currentAssignment.BikeId);
            
                result[currentAssignment.WorkerId] = currentAssignment.BikeId;
            }
            
        }

        return result;
    }

    private int CalculateDistance((int X, int Y) workerPosition, (int X, int Y) bikePosition)
    {
        return Math.Abs(workerPosition.X - bikePosition.X) + Math.Abs(workerPosition.Y - bikePosition.Y);
    }

    private void Initialize(Dictionary<int, (int X, int Y)> dictionary, int[][] array)
    {
        for (int i = 0; i < array.Length; i++)
        {
            dictionary.Add(i, (X: array[i][0], Y: array[i][1]));
        }
    }
}
```