document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;
        if (commentText.trim() === '') {
            alert('Please write a comment.');
            return;
        }

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        commentsList.appendChild(commentDiv);

        form.reset();
    });
});
