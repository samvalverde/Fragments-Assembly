import random

def generate_fragments(sequence, count, mean_length):
    fragments = []
    for _ in range(count):
        start = random.randint(0, max(0, len(sequence) - mean_length))
        fragment = sequence[start:start + mean_length]
        fragments.append(fragment)
    return fragments
