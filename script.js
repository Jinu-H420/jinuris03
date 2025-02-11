// 既存のコードに以下のタッチ操作を追加

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', event => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchmove', event => {
    event.preventDefault();
    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            movePiece(1); // 右に移動
        } else {
            movePiece(-1); // 左に移動
        }
    } else {
        if (deltaY > 0) {
            if (!collide(currentX, currentY + 1, currentPiece)) {
                currentY++; // 下に移動
            }
        } else {
            rotatePiece(); // 回転
        }
    }

    touchStartX = touchEndX;
    touchStartY = touchEndY;
});