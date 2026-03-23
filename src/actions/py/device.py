"""Device selection and embedding model configuration."""
import sys
import json
from pathlib import Path

INDEX_BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent / "data" / ".index"

MODELS = {
    "bge-m3": {
        "name": "BAAI/bge-m3",
        "dim": 1024,
        "min_gpu_gb": 2.0,
        "multilingual": True,
        "description": "Multilingual (zh/en/ja/ko), 1024 dim, ~2GB — best quality",
    },
    "bge-small-en": {
        "name": "BAAI/bge-small-en-v1.5",
        "dim": 384,
        "min_gpu_gb": 0.5,
        "multilingual": False,
        "description": "English only, 384 dim, ~130MB — fast and lightweight",
    },
}

DEFAULT_MODEL = "bge-m3"


def get_model_config() -> dict:
    """Read model config from data/.index/model.json, or return default."""
    config_file = INDEX_BASE_DIR / "model.json"
    if config_file.exists():
        config = json.loads(config_file.read_text())
        model_key = config.get("model", DEFAULT_MODEL)
        if model_key in MODELS:
            return MODELS[model_key]
    return MODELS[DEFAULT_MODEL]


def save_model_config(model_key: str):
    """Save model choice to data/.index/model.json."""
    INDEX_BASE_DIR.mkdir(parents=True, exist_ok=True)
    (INDEX_BASE_DIR / "model.json").write_text(
        json.dumps({"model": model_key}, indent=2)
    )


def select_device(min_free_gb: float = None) -> str:
    """Pick GPU with most free memory, or fallback to CPU.

    Args:
        min_free_gb: Minimum free GPU memory required. If None, uses model config.

    Returns:
        Device string like "cuda:6" or "cpu".
    """
    if min_free_gb is None:
        min_free_gb = get_model_config()["min_gpu_gb"]

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
    """Load embedding model based on config. Falls back to CPU on CUDA errors."""
    from llama_index.embeddings.huggingface import HuggingFaceEmbedding

    config = get_model_config()
    model_name = config["name"]

    try:
        return HuggingFaceEmbedding(
            model_name=model_name,
            device=device,
            trust_remote_code=True,
        )
    except Exception as e:
        if device != "cpu":
            print(f"Failed to load on {device}, falling back to CPU: {e}", file=sys.stderr)
            return HuggingFaceEmbedding(
                model_name=model_name,
                device="cpu",
                trust_remote_code=True,
            )
        raise
