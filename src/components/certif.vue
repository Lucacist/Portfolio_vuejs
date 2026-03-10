<template>
    <div class="tableau">
        <div class="gras">{{ $t('certifications.name') }}</div>
        <div class="gras">{{ $t('certifications.date') }}</div>
        <div class="gras">{{ $t('certifications.certification') }}</div>
        <div>{{ $t('certifications.moocAnssi') }}</div>
        <div>17/12/2025</div>
        <div>
          <a href="/downloads/Mooc Anssi.pdf" download="Mooc_Anssi.pdf">
            <button class="styled">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="arr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              {{ $t('certifications.download') }}
            </button>
          </a>
        </div>
    </div>
</template>
<style scoped>
.tableau {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #777;
    border-radius: 8px;
    max-width: 1200px;
    margin: 4rem auto;
    width: 80%;
}

.tableau div {
    border: 1px solid #777;
    padding: 1rem;
    align-items: center;
    display: flex;
}

.tableau div:nth-child(1) {
    border-radius: 7px 0 0 0;
}

.tableau div:nth-child(3) {
    border-radius: 0 7px 0 0;
}

.tableau div:nth-child(4) {
    border-radius: 0 0 0 7px;
}

.tableau div:nth-child(6) {
    border-radius: 0 0 7px 0;
}

button.styled {
    animation: bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
    background-color: var(--text-color);
    color: var(--background-color);
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
}

button.styled:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.arr-2 {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

button:hover .arr-2 {
    transform: rotate(-10deg);
}

.gras {
    font-weight: bold;
}
</style>
