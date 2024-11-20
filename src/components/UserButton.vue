<template>
    <button class="admin-button">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
            class="icon-size" stroke="#000000" fill="none">
            <circle cx="32" cy="18.14" r="11.14" />
            <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
        </svg>
        <div class="text-button">
            Administrador
        </div>
    </button>
</template>

<style scoped>
.icon-size {
    width: 27px;
    height: 27px;
}

.text-button {
    width: 220px;
    font-size: 18px;
    font-family: "Open Sans";
    font-weight: 700;
    color: white;
}

.admin-button {
    background-color: #FFC600;
    color: #003366;
    border: none;
    padding: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 240.913px;
    height: 28.614px;
}

.admin-button:hover {
    background-color: #FFD633;
}
</style>
