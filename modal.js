<!-- Custom Script -->

    function openModal() {
        $('#modal').modal('show');
    }

    function closeModal() {
        $('#modal').modal('hide');
    }

    function toggleForm() {
        const loginForm = document.getElementById("loginForm");
        const signupForm = document.getElementById("signupForm");

        if (loginForm.style.display !== "none") {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        } else {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        }
    }
