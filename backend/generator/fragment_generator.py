import random

def generate_fragments(sequence, count, mean_length, std_dev=2.0):
    fragments = []
    seq_len = len(sequence)

    for _ in range(count):
        frag_len = int(random.gauss(mean_length, std_dev))
        frag_len = max(1, min(frag_len, seq_len))
        start = random.randint(0, seq_len - frag_len)
        fragment = sequence[start:start + frag_len]
        fragments.append(fragment)

    return fragments

