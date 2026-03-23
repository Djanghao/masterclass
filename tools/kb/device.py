"""Auto-select best available GPU or fallback to CPU."""
import torch


def select_device(min_free_gb: float = 2.0) -> str:
    """Pick GPU with most free memory, or fallback to CPU.

    Args:
        min_free_gb: Minimum free GPU memory required (bge-m3 needs ~2GB).

    Returns:
        Device string like "cuda:6" or "cpu".
    """
    if not torch.cuda.is_available():
        return "cpu"

    best_idx = -1
    best_free = 0.0

    for i in range(torch.cuda.device_count()):
        free, total = torch.cuda.mem_get_info(i)
        free_gb = free / 1024**3
        if free_gb > best_free:
            best_free = free_gb
            best_idx = i

    if best_idx >= 0 and best_free >= min_free_gb:
        return f"cuda:{best_idx}"

    return "cpu"
