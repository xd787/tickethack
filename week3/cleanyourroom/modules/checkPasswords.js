function checkAdminPassword(pwdAdmin) {
  const password = "adminazerty123";
  if (pwdAdmin === password) {
    return true;
  } else {
    return false;
  }
}

function checkModeratorPassword(pwdModerator) {
  const password = "modpwd123";
  if (pwdModerator === password) {
    return true;
  } else {
    return false;
  }
}

module.exports = { checkAdminPassword, checkModeratorPassword };
