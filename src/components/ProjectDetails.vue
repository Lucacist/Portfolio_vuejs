<template>
  <div v-if="projectId === 4" class="project-additional-details">
    <h3>{{ $t("projects.details") }}</h3>

    <div v-if="projectId === 4" class="strongbox-details">
      <div class="ligne1">
        <div class="card" @click="toggleFlip($event)">
          <div class="card-inner">
            <div class="card-front">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 9.6499C3.13333 9.56657 3.06233 9.46257 3.037 9.3379C3.01166 9.21324 3.04933 9.0839 3.15 8.9499C4.18333 7.53324 5.47933 6.43324 7.038 5.6499C8.59666 4.86657 10.259 4.4749 12.025 4.4749C13.7917 4.4749 15.4583 4.85424 17.025 5.6129C18.5917 6.37157 19.9 7.46724 20.95 8.8999C21.05 9.0499 21.0833 9.18324 21.05 9.2999C21.0167 9.41657 20.95 9.51657 20.85 9.5999C20.75 9.68324 20.6333 9.7209 20.5 9.7129C20.3667 9.7049 20.25 9.6339 20.15 9.4999C19.2333 8.1999 18.0543 7.20424 16.613 6.5129C15.1717 5.82157 13.6423 5.47557 12.025 5.4749C10.4083 5.4749 8.89166 5.8209 7.475 6.5129C6.05833 7.2049 4.88333 8.20057 3.95 9.4999C3.85 9.6499 3.73333 9.73324 3.6 9.7499C3.46666 9.76657 3.35 9.73324 3.25 9.6499ZM14.85 21.9749C13.1167 21.5416 11.7 20.6789 10.6 19.3869C9.5 18.0949 8.95 16.5159 8.95 14.6499C8.95 13.8166 9.25 13.1166 9.85 12.5499C10.45 11.9832 11.175 11.6999 12.025 11.6999C12.875 11.6999 13.6 11.9832 14.2 12.5499C14.8 13.1166 15.1 13.8166 15.1 14.6499C15.1 15.1999 15.3083 15.6626 15.725 16.0379C16.1417 16.4132 16.6333 16.6006 17.2 16.5999C17.7667 16.5999 18.25 16.4126 18.65 16.0379C19.05 15.6632 19.25 15.2006 19.25 14.6499C19.25 12.7166 18.5417 11.0916 17.125 9.7749C15.7083 8.45824 14.0167 7.7999 12.05 7.7999C10.0833 7.7999 8.39166 8.45824 6.975 9.7749C5.55833 11.0916 4.85 12.7082 4.85 14.6249C4.85 15.0249 4.88766 15.5249 4.963 16.1249C5.03833 16.7249 5.21733 17.4249 5.5 18.2249C5.55 18.3749 5.546 18.5082 5.488 18.6249C5.43 18.7416 5.334 18.8249 5.2 18.8749C5.06666 18.9249 4.93767 18.9209 4.813 18.8629C4.68833 18.8049 4.60067 18.7089 4.55 18.5749C4.3 17.9249 4.121 17.2792 4.013 16.6379C3.905 15.9966 3.85066 15.3339 3.85 14.6499C3.85 12.4332 4.65433 10.5749 6.263 9.0749C7.87166 7.5749 9.79233 6.8249 12.025 6.8249C14.275 6.8249 16.2083 7.5749 17.825 9.0749C19.4417 10.5749 20.25 12.4332 20.25 14.6499C20.25 15.4832 19.9543 16.1789 19.363 16.7369C18.7717 17.2949 18.0507 17.5742 17.2 17.5749C16.35 17.5749 15.621 17.2959 15.013 16.7379C14.405 16.1799 14.1007 15.4839 14.1 14.6499C14.1 14.0999 13.896 13.6372 13.488 13.2619C13.08 12.8866 12.5923 12.6992 12.025 12.6999C11.4583 12.6999 10.9707 12.8876 10.562 13.2629C10.1533 13.6382 9.94933 14.1006 9.95 14.6499C9.95 16.2666 10.4293 17.6166 11.388 18.6999C12.3467 19.7832 13.584 20.5416 15.1 20.9749C15.25 21.0249 15.35 21.1082 15.4 21.2249C15.45 21.3416 15.4583 21.4666 15.425 21.5999C15.3917 21.7166 15.325 21.8166 15.225 21.8999C15.125 21.9832 15 22.0082 14.85 21.9749ZM6.5 4.4249C6.36666 4.50824 6.23333 4.52924 6.1 4.4879C5.96666 4.44657 5.86666 4.3589 5.8 4.2249C5.73333 4.09157 5.71666 3.9709 5.75 3.8629C5.78333 3.7549 5.86666 3.6589 6 3.5749C6.93333 3.0749 7.90833 2.69157 8.925 2.4249C9.94166 2.15824 10.975 2.0249 12.025 2.0249C13.0917 2.0249 14.1333 2.15424 15.15 2.4129C16.1667 2.67157 17.15 3.04224 18.1 3.5249C18.25 3.60824 18.3377 3.70824 18.363 3.8249C18.3883 3.94157 18.3757 4.05824 18.325 4.1749C18.275 4.29157 18.1917 4.38324 18.075 4.4499C17.9583 4.51657 17.8167 4.50824 17.65 4.4249C16.7667 3.9749 15.854 3.62924 14.912 3.3879C13.97 3.14657 13.0077 3.02557 12.025 3.0249C11.0583 3.0249 10.1083 3.13757 9.175 3.3629C8.24166 3.58824 7.35 3.94224 6.5 4.4249ZM9.45 21.6249C8.46666 20.5916 7.71266 19.5376 7.188 18.4629C6.66333 17.3882 6.40066 16.1172 6.4 14.6499C6.4 13.1332 6.95 11.8539 8.05 10.8119C9.15 9.7699 10.475 9.24924 12.025 9.2499C13.575 9.2499 14.9083 9.7709 16.025 10.8129C17.1417 11.8549 17.7 13.1339 17.7 14.6499C17.7 14.7999 17.6543 14.9209 17.563 15.0129C17.4717 15.1049 17.3507 15.1506 17.2 15.1499C17.0667 15.1499 16.95 15.1042 16.85 15.0129C16.75 14.9216 16.7 14.8006 16.7 14.6499C16.7 13.3999 16.2373 12.3542 15.312 11.5129C14.3867 10.6716 13.291 10.2506 12.025 10.2499C10.7583 10.2499 9.671 10.6709 8.763 11.5129C7.855 12.3549 7.40066 13.4006 7.4 14.6499C7.4 15.9999 7.63333 17.1459 8.1 18.0879C8.56667 19.0299 9.25 19.9756 10.15 20.9249C10.25 21.0249 10.3 21.1416 10.3 21.2749C10.3 21.4082 10.25 21.5249 10.15 21.6249C10.05 21.7249 9.93333 21.7749 9.8 21.7749C9.66666 21.7749 9.55 21.7249 9.45 21.6249ZM17 19.9249C15.5167 19.9249 14.229 19.4249 13.137 18.4249C12.045 17.4249 11.4993 16.1666 11.5 14.6499C11.5 14.5166 11.546 14.3999 11.638 14.2999C11.73 14.1999 11.8507 14.1499 12 14.1499C12.15 14.1499 12.271 14.1999 12.363 14.2999C12.455 14.3999 12.5007 14.5166 12.5 14.6499C12.5 15.8999 12.95 16.9249 13.85 17.7249C14.75 18.5249 15.8 18.9249 17 18.9249C17.1 18.9249 17.2417 18.9166 17.425 18.8999C17.6083 18.8832 17.8 18.8582 18 18.8249C18.15 18.7916 18.2793 18.8126 18.388 18.8879C18.4967 18.9632 18.5673 19.0756 18.6 19.2249C18.6333 19.3582 18.6083 19.4749 18.525 19.5749C18.4417 19.6749 18.3333 19.7416 18.2 19.7749C17.9 19.8582 17.6377 19.9042 17.413 19.9129C17.1883 19.9216 17.0507 19.9256 17 19.9249Z"
                  fill="white"
                />
              </svg>
              <div class="texte">
                {{ $t("projects.project4.securityFeatures.scanDigitalTitle") }}
              </div>
            </div>
            <div class="card-back">
              <p>{{ $t("projects.project4.securityFeatures.scanDigital") }}</p>
            </div>
          </div>
        </div>
        <div class="card" @click="toggleFlip($event)">
          <div class="card-inner">
            <div class="card-front">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2.75C15.907 2.75 17.262 2.752 18.29 2.89C19.295 3.025 19.875 3.279 20.298 3.702C20.785 4.189 20.998 4.567 21.115 5.24C21.247 5.999 21.25 7.08 21.25 9C21.25 9.19891 21.329 9.38968 21.4697 9.53033C21.6103 9.67098 21.8011 9.75 22 9.75C22.1989 9.75 22.3897 9.67098 22.5303 9.53033C22.671 9.38968 22.75 9.19891 22.75 9V8.904C22.75 7.104 22.75 5.886 22.592 4.982C22.417 3.977 22.043 3.326 21.359 2.642C20.61 1.892 19.661 1.561 18.489 1.403C17.349 1.25 15.894 1.25 14.056 1.25H14C13.8011 1.25 13.6103 1.32902 13.4697 1.46967C13.329 1.61032 13.25 1.80109 13.25 2C13.25 2.19891 13.329 2.38968 13.4697 2.53033C13.6103 2.67098 13.8011 2.75 14 2.75ZM2 14.25C2.19891 14.25 2.38968 14.329 2.53033 14.4697C2.67098 14.6103 2.75 14.8011 2.75 15C2.75 16.92 2.753 18.001 2.885 18.76C3.003 19.433 3.215 19.811 3.702 20.298C4.125 20.721 4.705 20.975 5.711 21.11C6.739 21.248 8.093 21.25 10 21.25C10.1989 21.25 10.3897 21.329 10.5303 21.4697C10.671 21.6103 10.75 21.8011 10.75 22C10.75 22.1989 10.671 22.3897 10.5303 22.5303C10.3897 22.671 10.1989 22.75 10 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.957 20.674 1.583 20.023 1.408 19.018C1.25 18.114 1.25 16.895 1.25 15.096V15C1.25 14.8011 1.32902 14.6103 1.46967 14.4697C1.61032 14.329 1.80109 14.25 2 14.25ZM22 14.25C22.1989 14.25 22.3897 14.329 22.5303 14.4697C22.671 14.6103 22.75 14.8011 22.75 15V15.096C22.75 16.896 22.75 18.114 22.592 19.018C22.417 20.023 22.043 20.674 21.359 21.358C20.61 22.108 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H14C13.8011 22.75 13.6103 22.671 13.4697 22.5303C13.329 22.3897 13.25 22.1989 13.25 22C13.25 21.8011 13.329 21.6103 13.4697 21.4697C13.6103 21.329 13.8011 21.25 14 21.25C15.907 21.25 17.262 21.248 18.29 21.11C19.295 20.975 19.875 20.721 20.298 20.298C20.785 19.811 20.998 19.433 21.115 18.76C21.247 18.001 21.25 16.92 21.25 15C21.25 14.8011 21.329 14.6103 21.4697 14.4697C21.6103 14.329 21.8011 14.25 22 14.25ZM9.944 1.25H10C10.1989 1.25 10.3897 1.32902 10.5303 1.46967C10.671 1.61032 10.75 1.80109 10.75 2C10.75 2.19891 10.671 2.38968 10.5303 2.53033C10.3897 2.67098 10.1989 2.75 10 2.75C8.093 2.75 6.739 2.752 5.71 2.89C4.705 3.025 4.125 3.279 3.702 3.702C3.215 4.189 3.002 4.567 2.885 5.24C2.753 5.999 2.75 7.08 2.75 9C2.75 9.19891 2.67098 9.38968 2.53033 9.53033C2.38968 9.67098 2.19891 9.75 2 9.75C1.80109 9.75 1.61032 9.67098 1.46967 9.53033C1.32902 9.38968 1.25 9.19891 1.25 9V8.904C1.25 7.104 1.25 5.886 1.408 4.982C1.583 3.977 1.957 3.326 2.641 2.642C3.39 1.892 4.339 1.561 5.511 1.403C6.651 1.25 8.106 1.25 9.944 1.25ZM12 10.75C11.6685 10.75 11.3505 10.8817 11.1161 11.1161C10.8817 11.3505 10.75 11.6685 10.75 12C10.75 12.3315 10.8817 12.6495 11.1161 12.8839C11.3505 13.1183 11.6685 13.25 12 13.25C12.3315 13.25 12.6495 13.1183 12.8839 12.8839C13.1183 12.6495 13.25 12.3315 13.25 12C13.25 11.6685 13.1183 11.3505 12.8839 11.1161C12.6495 10.8817 12.3315 10.75 12 10.75Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.892 14.06C5.297 13.37 5 13.025 5 12C5 10.975 5.297 10.63 5.892 9.94C7.08 8.562 9.072 7 12 7C14.927 7 16.92 8.562 18.108 9.94C18.703 10.63 19 10.975 19 12C19 13.025 18.703 13.37 18.108 14.06C16.92 15.438 14.928 17 12 17C9.073 17 7.08 15.438 5.892 14.06ZM9.25 12C9.25 11.2707 9.53973 10.5712 10.0555 10.0555C10.5712 9.53973 11.2707 9.25 12 9.25C12.7293 9.25 13.4288 9.53973 13.9445 10.0555C14.4603 10.5712 14.75 11.2707 14.75 12C14.75 12.7293 14.4603 13.4288 13.9445 13.9445C13.4288 14.4603 12.7293 14.75 12 14.75C11.2707 14.75 10.5712 14.4603 10.0555 13.9445C9.53973 13.4288 9.25 12.7293 9.25 12Z"
                  fill="white"
                />
              </svg>
              <div class="texte">
                {{ $t("projects.project4.securityFeatures.scanRetinalTitle") }}
              </div>
            </div>
            <div class="card-back">
              <p>{{ $t("projects.project4.securityFeatures.scanRetinal") }}</p>
            </div>
          </div>
        </div>
        <div class="card" @click="toggleFlip($event)">
          <div class="card-inner">
            <div class="card-front">
              <svg
                width="128.5"
                height="90"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM13 4H17V5H13V4ZM11 11.803C10.8378 11.6791 10.6599 11.5772 10.471 11.5C9.291 10.992 7.51 10.24 7.51 9.324C7.51 8.773 7.869 8.953 8.028 7.945C8.094 7.527 8.413 7.938 8.473 6.984C8.473 6.604 8.299 6.509 8.299 6.509C8.299 6.509 8.387 5.947 8.422 5.513C8.458 5.06 8.201 3.713 7.145 3.416C6.959 3.228 6.834 3.305 7.403 3.004C6.159 2.945 5.869 3.596 5.207 4.075C4.643 4.495 4.49 5.16 4.518 5.514C4.555 5.947 4.643 6.51 4.643 6.51C4.643 6.51 4.468 6.604 4.468 6.984C4.529 7.938 4.848 7.527 4.913 7.945C5.071 8.953 5.432 8.773 5.432 9.324C5.432 10.24 3.651 10.992 2.471 11.5C2.30511 11.5695 2.1472 11.6567 2 11.76V2H11V11.803ZM18 8H13V7H18V8Z"
                  fill="white"
                />
              </svg>
              <div class="texte">
                {{ $t("projects.project4.securityFeatures.cardIDTitle") }}
              </div>
            </div>
            <div class="card-back">
              <p>{{ $t("projects.project4.securityFeatures.cardID") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ligne2">
        <div class="card" @click="toggleFlip($event)">
          <div class="card-inner">
            <div class="card-front">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7.25C12.5 7.05109 12.421 6.86032 12.2803 6.71967C12.1397 6.57902 11.9489 6.5 11.75 6.5C11.5511 6.5 11.3603 6.57902 11.2197 6.71967C11.079 6.86032 11 7.05109 11 7.25V12.75C11 13.02 11.144 13.268 11.378 13.401L14.878 15.401C15.0503 15.4941 15.2522 15.5161 15.4405 15.4624C15.6288 15.4086 15.7886 15.2833 15.8858 15.1133C15.9829 14.9433 16.0097 14.742 15.9604 14.5524C15.9112 14.3629 15.7897 14.2002 15.622 14.099L12.5 12.315V7.25Z"
                  fill="white"
                />
                <path
                  d="M12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1ZM2.5 12C2.5 14.5196 3.50089 16.9359 5.28249 18.7175C7.06408 20.4991 9.48044 21.5 12 21.5C14.5196 21.5 16.9359 20.4991 18.7175 18.7175C20.4991 16.9359 21.5 14.5196 21.5 12C21.5 9.48044 20.4991 7.06408 18.7175 5.28249C16.9359 3.50089 14.5196 2.5 12 2.5C9.48044 2.5 7.06408 3.50089 5.28249 5.28249C3.50089 7.06408 2.5 9.48044 2.5 12Z"
                  fill="white"
                />
              </svg>
              <div class="texte">
                {{ $t("projects.project4.securityFeatures.dynamicCodeTitle") }}
              </div>
            </div>
            <div class="card-back">
              <p>{{ $t("projects.project4.securityFeatures.dynamicCode") }}</p>
            </div>
          </div>
        </div>
        <div class="card" @click="toggleFlip($event)">
          <div class="card-inner">
            <div class="card-front">
              <svg
                width="130"
                height="130"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10C8.26522 10 8.51957 9.89464 8.70711 9.70711C8.89464 9.51957 9 9.26522 9 9C9 7.342 10.342 6 12 6C13.658 6 15 7.342 15 9C15 9.816 14.801 10.294 14.562 10.629C14.3 10.994 13.937 11.267 13.434 11.614L13.318 11.692C12.871 11.998 12.295 12.391 11.849 12.939C11.322 13.587 11 14.406 11 15.5V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V15.5C13 14.844 13.178 14.476 13.4 14.201C13.657 13.887 14.003 13.649 14.514 13.298L14.567 13.261C15.063 12.921 15.7 12.475 16.187 11.793C16.7 11.081 17 10.183 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4ZM12 21.25C12.3315 21.25 12.6495 21.1183 12.8839 20.8839C13.1183 20.6495 13.25 20.3315 13.25 20C13.25 19.6685 13.1183 19.3505 12.8839 19.1161C12.6495 18.8817 12.3315 18.75 12 18.75C11.6685 18.75 11.3505 18.8817 11.1161 19.1161C10.8817 19.3505 10.75 19.6685 10.75 20C10.75 20.3315 10.8817 20.6495 11.1161 20.8839C11.3505 21.1183 11.6685 21.25 12 21.25Z"
                  fill="white"
                />
              </svg>
              <div class="texte">
                {{ $t("projects.project4.securityFeatures.qaAuthTitle") }}
              </div>
            </div>
            <div class="card-back">
              <p>{{ $t("projects.project4.securityFeatures.qaAuth") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="niveau">
        <table class="table-child">
          <tr style="border-bottom-style: solid">
            <td>NS1</td>
            <td>NS2</td>
            <td>NS3</td>
            <td>NS4</td>
            <td>NS5</td>
          </tr>
          <tr>
            <td>MA1</td>
            <td>MA1</td>
            <td>MA5</td>
            <td>MA2</td>
            <td>MA1</td>
          </tr>
          <tr>
            <td>MA3</td>
            <td>MA4</td>
            <td>MA2</td>
            <td>MA3</td>
            <td>MA2</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>MA4</td>
            <td>MA3</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>MA5</td>
          </tr>
        </table>
        <div class="modele-agent">
          <p>MA1: {{ $t("projects.project4.securityFeatures.qaAuthTitle") }}</p>
          <p>
            MA2: {{ $t("projects.project4.securityFeatures.dynamicCodeTitle") }}
          </p>
          <p>
            MA3: {{ $t("projects.project4.securityFeatures.scanRetinalTitle") }}
          </p>
          <p>
            MA4: {{ $t("projects.project4.securityFeatures.scanDigitalTitle") }}
          </p>
          <p>MA5: {{ $t("projects.project4.securityFeatures.cardIDTitle") }}</p>
        </div>
      </div>
      <img
        class="strongbox-image"
        src="/img/coffre-tinkercad.png"
        alt="schéma du coffre"
      />
    </div>
  </div>
  <div v-if="projectId === 3" class="project-additional-details">
    <h3>{{ $t("projects.details") }}</h3>

    <div v-if="projectId === 3" class="strongbox-details">
      <img class="strongbox-image" src="/img/MCD.webp" alt="MCD" />
      <img class="strongbox-image" src="/img/MLD.png" alt="MLD" />
    </div>
  </div>
  <div v-if="projectId === 13" class="project-additional-details">
    <h3>{{ $t("projects.details") }}</h3>

    <div v-if="projectId === 13" class="strongbox-details">
      <h3>{{ $t("projects.project13.composants") }}</h3>
      <div class="ligne13">
        <div
          v-for="card in project13Cards"
          :key="card.key"
          class="card"
          @click="toggleFlip($event)"
        >
          <div class="card-inner">
            <div class="card-front">
              <div class="texte">
                {{ card.title }}
              </div>
              <img
                v-if="card.image"
                :src="card.image"
                :alt="card.title"
                class="card-image"
              />
            </div>
            <div class="card-back">
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="montage-explication">
        <h3>{{ $t("projects.project13.montage") }}</h3>
        <p>{{ $t("projects.project13.explication") }}</p>
      </div>
      <div class="montage">
        <img
          class="strongbox-image"
          src="/img/projet13/piece1.webp"
          alt="montage"
        />
        <img
          class="strongbox-image"
          src="/img/projet13/piece2.webp"
          alt="montage"
        />
        <img
          class="strongbox-image"
          src="/img/projet13/piece3.webp"
          alt="montage"
        />
      </div>

      <div class="modes-section">
        <h3>{{ $t("projects.project13.modes") }}</h3>

        <div class="mode-card">
          <h4>{{ $t("projects.project13.mode1.title") }}</h4>
          <p class="mode-objective">
            {{ $t("projects.project13.mode1.objective") }}
          </p>
          <p class="mode-description">
            {{ $t("projects.project13.mode1.description") }}
          </p>
        </div>

        <div class="mode-card">
          <h4>{{ $t("projects.project13.mode2.title") }}</h4>
          <p class="mode-objective">
            {{ $t("projects.project13.mode2.objective") }}
          </p>
          <p class="mode-description">
            {{ $t("projects.project13.mode2.description") }}
          </p>
        </div>

        <div class="mode-card">
          <h4>{{ $t("projects.project13.mode3.title") }}</h4>
          <p class="mode-objective">
            {{ $t("projects.project13.mode3.objective") }}
          </p>
          <p class="mode-description">
            {{ $t("projects.project13.mode3.description") }}
          </p>
        </div>

        <div class="mode-card">
          <h4>{{ $t("projects.project13.mode4.title") }}</h4>
          <p class="mode-objective">
            {{ $t("projects.project13.mode4.objective") }}
          </p>
          <p class="mode-description">
            {{ $t("projects.project13.mode4.description") }}
          </p>
        </div>
      </div>
      <div class="no-code">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke="var(--red-dark)"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          {{ $t("projects.project13.no-code") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, locale } = useI18n();

const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});

const project13Cards = computed(() => {
  // Récupérer les clés des cartes du projet 13
  const cards = [];

  // Liste des cartes disponibles
  const cardKeys = [
    "microcontroller",
    "storage",
    "rtc",
    "sensors",
    "rgb",
    "buttons",
    "gps",
    "light",
    "temp",
    "humidity",
  ];

  // Créer un tableau d'objets pour les cartes
  cardKeys.forEach((key) => {
    cards.push({
      key: key,
      title: t(`projects.project13.cards.${key}.title`),
      image: t(`projects.project13.cards.${key}.image`),
      description: t(`projects.project13.cards.${key}.description`),
    });
  });

  return cards;
});

const toggleFlip = (event) => {
  const card = event.currentTarget;
  card.classList.toggle("flipped");
};
</script>

<style scoped>
.project-additional-details {
  margin: 2rem 0;
}

.strongbox-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
}

.card svg path {
  fill: var(--text-color);
}

.card svg {
  height: 80%;
}

.ligne1,
.ligne13 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 1rem;
  width: 100%;
}

.ligne2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 1rem;
  width: 100%;
}

.card {
  min-width: 200px;
  min-height: 200px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.card:hover .card-inner,
.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-back {
  transform: rotateY(180deg);
  padding: 1rem;
}

.texte {
  font-size: 1rem;
  color: var(--text-color);
  text-align: center;
}

p {
  text-align: center;
}

.card-image {
  max-width: 80%;
  max-height: 100px;
  margin-top: 1rem;
  filter: var(--svg-filter);
}

.niveau {
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
}
.modele-agent {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
}
.modele-agent p {
  font-size: 1rem;
  margin: 0;
}
.table {
  flex-direction: row;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  flex-wrap: wrap;
}

.table-child {
  border-collapse: collapse;
  border-color: var(--text-color);
  border-style: solid;
  width: 450px;
}

td {
  width: 100px;
  height: 40px;
  border: var(--text-color);
  border-left-style: solid;
  text-align: center;
}

.strongbox-image {
  max-width: 700px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.montage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.montage img {
  max-width: 400px;
  width: 80%;
}

.montage img:nth-child(1) {
  transform: rotate(-6deg);
}

.montage img:nth-child(2) {
  margin-top: -6rem;
}

.montage img:nth-child(3) {
  margin-top: -6rem;
}

.montage-explication {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.modes-section {
  margin-top: 3rem;
  width: 100%;
}

.modes-section h3 {
  text-align: center;
  margin-bottom: 2rem;
}

.mode-card {
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mode-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.mode-card h4 {
  font-size: 1.25rem;
  margin-top: 0;
  color: var(--heading-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.mode-objective {
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: left;
}

.mode-description {
  line-height: 1.6;
  text-align: left;
}

.no-code p {
  margin: 0;
  padding: 1.5rem 3rem;
  background-color: var(--red-light);
  border: 1px solid var(--red);
  color: var(--red-dark);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.no-code svg {
  width: 1.5rem;
}

@media (max-width: 900px) {
  .niveau {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
}

@media (max-width: 750px) {
  .ligne1 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  .ligne1 > :nth-child(3) {
    grid-column: 1 / -1;
  }
  .ligne13 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
}

@media (max-width: 600px) {
  .table-child {
    width: 350px;
  }
}

@media (max-width: 550px) {
  .ligne1 {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  .ligne2 {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  .ligne13 {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
  }
}

@media (max-width: 500px) {
  .table-child {
    width: 250px;
  }
  td {
    height: 30px;
  }
}
</style>
