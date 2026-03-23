"""Auto-select best available GPU or fallback to CPU."""
import sys


def select_device(min_free_gb: float = 2.0) -> str:
    """Pick GPU with most free memory, or fallback to CPU.

    Args:
        min_free_gb: Minimum free GPU memory required (bge-m3 needs ~2GB).

    Returns:
        Device string like "cuda:6" or "cpu".
    """
    try:
        import torch

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

    except Exception as e:
        print(f"CUDA detection failed, using CPU: {e}", file=sys.stderr)

    return "cpu"


def load_embed_model(device: str):
    """Load bge-m3 embedding model. Falls back to CPU on CUDA errors."""
    from llama_index.embeddings.huggingface import HuggingFaceEmbedding

    try:
        return HuggingFaceEmbedding(
            model_name="BAAI/bge-m3",
            device=device,
            trust_remote_code=True,
        )
    except Exception as e:
        if device != "cpu":
            print(f"Failed to load on {device}, falling back to CPU: {e}", file=sys.stderr)
            return HuggingFaceEmbedding(
                model_name="BAAI/bge-m3",
                device="cpu",
                trust_remote_code=True,
            )
        raise
