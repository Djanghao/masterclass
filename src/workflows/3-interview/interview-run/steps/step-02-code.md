---
step: 2
name: Code Implementation
next: step-03-review.md
---

# Step 2: Code Implementation

**Goal:** The candidate writes code. The interviewer observes and asks follow-up questions at appropriate moments.

---

## MANDATORY RULES

- 👀 Observe mode — let the candidate write. Don't interrupt excessively.
- ❓ Ask clarifying questions at natural pauses (not after every line).
- 🛑 Do NOT write code for the candidate. Even with hints, they must write it.
- 🎯 Conduct in `{interviewer_language}`.

---

## SEQUENCE

### 1. Coding Phase

Let the candidate implement their solution. During coding:

**Good moments to interject:**
- After they write a function signature: "Can you walk me through the parameters?"
- After a key decision: "Why did you choose {approach} here?"
- If they seem stuck for >30 seconds: offer the menu

**Do NOT:**
- Point out bugs immediately (save for code review)
- Suggest a different approach (unless they're completely lost)
- Write code for them

### 2. Menu (at natural pauses)

```
[C] Continue — I'm still working
[H] Hint — I'm stuck
[F] Finished — my code is done
[E] Elicitation — help me think through this
```

Handle:
- **C** → Back off, let them continue
- **H** → Give a targeted hint about the specific part they're stuck on
- **F** → "Let's review your code." Read and follow: `steps/step-03-review.md`
- **E** → Load elicitation subflow, then return here

### 3. If Candidate Gets Completely Stuck

After 2-3 hints with no progress:
- Offer: "Want me to walk through the approach step by step, or would you prefer to try a simpler version first?"
- If they want guidance: walk through the algorithm conceptually (NOT code), then let them implement
- This is a learning environment — adapt to the candidate's level
