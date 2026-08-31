# 100% faster than all C# submissions (at the time of writing)

**Author:** mojo1234
**Votes:** 2
**Link:** [https://leetcode.com/problems/online-election/solutions/1760688/](https://leetcode.com/problems/online-election/solutions/1760688/)

---

```
    public class TopVotedCandidate
    {
        private List<Vote> votes = new List<Vote>();

        public TopVotedCandidate(int[] persons, int[] times)    
        {
            var tally = new Dictionary<int, int>();
            int lastPerson = -1;

            for (int i = 0; i < persons.Length; i++)
            {
                var person = persons[i];
                if (!tally.ContainsKey(person))
                    tally.Add(person, 0);
                tally[person] += 1;
                if (person != lastPerson && (lastPerson < 0 || tally[person] >= tally[lastPerson]))
                {
                    lastPerson = persons[i];
                    votes.Add(
                        new Vote
                        {
                            Person = lastPerson,
                            Time = times[i]
                        })  ;
                }
            }
        }

        public int Q(int t)
        {
            var start = 1;
            var end = votes.Count;
            while(start <= end && start != votes.Count)
            {
                var mid = start + ((end - start) / 2);
                var vote = votes[mid];
                if (vote.Time == t)
                    return vote.Person;
                else if (vote.Time > t)
                    end = mid - 1;
                else
                    start = mid + 1;
            }
            return votes[start - 1].Person;
        }
    }

    public class Vote
    {
        public int Person { get; set; }
        public int Time { get; set; }
    }
```