const express = require("express");
const passport = require("passport");
var JWTstrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  //   confirmEmail,
} = require("../controlers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

// passport.use(
//   new JWTstrategy(
//     {
//       secretOrKey: "kevinchodvadiya",
//       jwtFromRequest: ExtractJWT.fromUrlQueryParameter("token"),
//     },
//     async (token, done) => {
//       try {
//         return done(null, token.id);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// router.get("/me", passport.authenticate("jwt", { session: false }), getMe);
router.get('/me', protect, getMe);
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// router.get("/confirmemail", confirmEmail);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
