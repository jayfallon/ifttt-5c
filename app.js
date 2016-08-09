(function() {
  var IF_lets_you_create, allIndicators, bg, big_IF, bottom_phone, bottom_phone_y, by_IFTT, c_x, calendar, cancel_small, cont_pos, currentMode, example_recipes, f_x, facebook, field_mask, form_fields, form_fields_top, g_x, gmail, i, i_recipe_x, i_x, indicator, indicatorsContainer, instagram, instagram_recipe, ios_contacts, ios_location, ios_notif, ios_photos, iphone, label_SignIn, label_createAccount, label_resetPassword, loca_pos, page, page1, page2, page3, page4, page5, page6, phot_pos, placeholder_reset_Password, placeholders_sign_In, placeholders_sign_Up, r_arrow_x, r_x, recipe_arrows, recipes_are_connections, reset_Password_small, rss_feed, s_x, sc_x, soundcloud, splash_screen, stocks, switchToMode, text_SignIn, text_SignUp, trail_c_left, trail_c_right, trail_left, trail_right, unlock_the_power_of, w_x, weather, whiteButton, _i;

  Framer.Info = {
    title: "IFTTT",
    author: "Jay Fallon",
    twitter: "jayfallon",
    description: "Prototype for IF by IFTTT"
  };

  bg = new BackgroundLayer({
    backgroundColor: "rgba(51, 204, 255, 1)"
  });


  /* PAGE COMPONENT */

  page = new PageComponent({
    width: Screen.width,
    height: Screen.height,
    scrollVertical: false,
    index: 2
  });


  /* PAGE ONE */

  page1 = new Layer({
    backgroundColor: null,
    width: Screen.width,
    height: Screen.height
  });

  page.addPage(page1);

  iphone = new Layer({
    superLayer: page1,
    width: 300,
    height: 600,
    image: "images/phone.png",
    y: 164
  });

  iphone.centerX();

  IF_lets_you_create = new Layer({
    superLayer: page1,
    width: 470,
    height: 130,
    image: "images/IF_lets_you_create.png",
    y: 804
  });

  IF_lets_you_create.centerX();

  by_IFTT = new Layer({
    superLayer: page1,
    width: 196,
    height: 60,
    image: "images/by_IFTTT.png",
    y: 982
  });

  by_IFTT.centerX();

  weather = new Layer({
    width: 124,
    height: 124,
    image: "images/weather.png",
    x: 74,
    y: 260,
    index: 1
  });

  w_x = weather.x;

  rss_feed = new Layer({
    width: 72,
    height: 72,
    image: "images/rss_feed.png",
    x: 90,
    y: 528,
    index: 1
  });

  r_x = rss_feed.x;

  facebook = new Layer({
    width: 54,
    height: 54,
    image: "images/facebook.png",
    x: 482,
    y: 240,
    index: 1
  });

  f_x = facebook.x;

  gmail = new Layer({
    width: 62,
    height: 46,
    image: "images/gmail.png",
    x: 540,
    y: 350,
    index: 1
  });

  g_x = gmail.x;

  stocks = new Layer({
    width: 122,
    height: 122,
    image: "images/stocks.png",
    x: 460,
    y: 438,
    index: 1
  });

  s_x = stocks.x;

  soundcloud = new Layer({
    width: 80,
    height: 80,
    image: "images/soundcloud.png",
    x: 492,
    y: 584,
    index: 1
  });

  sc_x = soundcloud.x;

  instagram = new Layer({
    width: 110,
    height: 110,
    image: "images/instagram.png",
    x: 50,
    y: 398,
    index: 2
  });

  i_x = instagram.x;

  calendar = new Layer({
    width: 110,
    height: 100,
    image: "images/calendar.png",
    x: 406,
    y: 330,
    index: 2
  });

  c_x = calendar.x;


  /* PAGE TWO */

  page2 = new Layer({
    backgroundColor: null,
    width: page.width,
    height: page.height
  });

  page.addPage(page2);

  instagram_recipe = new Layer({
    superLayer: page2,
    width: 570,
    height: 418,
    image: "images/Instagram_recipe.png",
    y: 180
  });

  instagram_recipe.centerX();

  i_recipe_x = instagram_recipe.x;

  recipes_are_connections = new Layer({
    superLayer: page2,
    width: 400,
    height: 80,
    image: "images/Recipes_are_connections.png",
    y: 636
  });

  recipes_are_connections.centerX();


  /* PAGE THREE */

  page3 = new Layer({
    backgroundColor: null,
    width: page.width,
    height: page.height
  });

  page.addPage(page3);

  recipe_arrows = new Layer({
    superLayer: page3,
    width: 600,
    height: 427,
    image: "images/recipe_arrows.png",
    y: 438
  });

  recipe_arrows.centerX();

  r_arrow_x = recipe_arrows.x;


  /* PAGE FOUR */

  page4 = new Layer({
    backgroundColor: null,
    width: page.width,
    height: page.height
  });

  page.addPage(page4);

  unlock_the_power_of = new Layer({
    superLayer: page4,
    width: 538,
    height: 90,
    image: "images/unlock_the_power_of.png",
    y: 166
  });

  unlock_the_power_of.centerX();

  bottom_phone = new Layer({
    width: 640,
    height: 347,
    image: "images/bottom_phone.png",
    y: 1720,
    index: 3
  });

  bottom_phone_y = bottom_phone.y;

  trail_left = new Layer({
    width: 250,
    height: 430,
    image: "images/trail_left.png",
    x: 60,
    y: 518 + page.height
  });

  ios_photos = new Layer({
    width: 182,
    height: 182,
    image: "images/ios_photos.png",
    x: 52,
    y: 500 + page.height
  });

  phot_pos = {
    p4: {
      x: 52,
      y: 500
    },
    p5: {
      x: 164,
      y: 488
    }
  };

  trail_c_left = new Layer({
    width: 160,
    height: 508,
    image: "images/trail_center_left.png",
    x: 172,
    y: 410 + page.height,
    index: 2
  });

  ios_notif = new Layer({
    width: 182,
    height: 182,
    image: "images/ios_notifications.png",
    x: 158,
    y: 320 + page.height
  });

  trail_c_right = new Layer({
    width: 192,
    height: 452,
    image: "images/trail_center_right.png",
    x: 336,
    y: 414 + page.height,
    index: 2
  });

  ios_location = new Layer({
    width: 182,
    height: 182,
    image: "images/ios_location.png",
    x: 352,
    y: 322 + page.height
  });

  loca_pos = {
    p4: {
      x: 352,
      y: 322
    },
    p5: {
      x: 168,
      y: 228
    }
  };

  trail_right = new Layer({
    width: 240,
    height: 330,
    image: "images/trail_right.png",
    x: 360,
    y: 586 + page.height
  });

  ios_contacts = new Layer({
    width: 182,
    height: 182,
    image: "images/ios_contacts.png",
    x: 422,
    y: 572 + page.height
  });

  cont_pos = {
    p4: {
      x: 422,
      y: 572
    },
    p5: {
      x: 164,
      y: 746
    }
  };


  /* PAGE FIVE */

  page5 = new Layer({
    backgroundColor: null,
    width: page.width,
    height: page.height
  });

  page.addPage(page5);

  example_recipes = new Layer({
    superLayer: page5,
    width: 570,
    height: 850,
    image: "images/Example_recipes.png",
    y: 110
  });

  example_recipes.centerX();


  /* PAGE SIX */

  page6 = new Layer({
    backgroundColor: null,
    width: page.width,
    height: page.height
  });

  page.addPage(page6);

  big_IF = new Layer({
    superLayer: page6,
    width: 194,
    height: 162,
    image: "images/big_IF.png",
    y: 230
  });

  big_IF.centerX();

  placeholders_sign_Up = new Layer({
    superLayer: page6,
    width: 154,
    height: 208,
    image: "images/placeholders_sign_Up.png",
    x: 82,
    y: 490
  });

  placeholders_sign_In = new Layer({
    superLayer: page6,
    width: 288,
    height: 118,
    image: "images/placeholders_sign_In.png",
    x: 82,
    y: 490,
    opactity: 0
  });

  placeholder_reset_Password = new Layer({
    superLayer: page6,
    width: 80,
    height: 28,
    image: "images/placeholder_reset_Password.png",
    x: 82,
    y: 492,
    opacity: 0
  });

  form_fields_top = new Layer({
    superLayer: page6,
    width: 540,
    height: 10,
    image: "images/form_top.png",
    y: 457
  });

  form_fields_top.centerX();

  field_mask = new Layer({
    superLayer: page6,
    backgroundColor: null,
    width: 540,
    height: 264,
    y: 467,
    clip: true
  });

  field_mask.centerX();

  form_fields = new Layer({
    superLayer: field_mask,
    width: 540,
    height: 264,
    image: "images/form_fields.png"
  });

  form_fields.states.add({
    signup: {
      y: 0
    },
    signin: {
      y: -90
    },
    resetpassw: {
      y: -176
    }
  });

  form_fields.states.animationOptions = {
    curve: "spring(1000,40,0)"
  };

  reset_Password_small = new Layer({
    superLayer: page6,
    width: 216,
    height: 48,
    image: "images/Reset_Password_small.png",
    y: 677,
    opacity: 0
  });

  reset_Password_small.centerX();

  cancel_small = new Layer({
    superLayer: page6,
    width: 106,
    height: 48,
    image: "images/Cancel_small.png",
    y: 570,
    opacity: 0
  });

  cancel_small.centerX();

  text_SignUp = new Layer({
    superLayer: page6,
    width: 500,
    height: 95,
    image: "images/text_SignUp.png",
    y: 964,
    visible: false
  });

  text_SignUp.centerX();

  whiteButton = new Layer({
    superLayer: page6,
    backgroundColor: "#ffffff",
    width: 540,
    height: 122,
    borderRadius: 6,
    x: 50,
    y: 764
  });

  whiteButton.on(Events.TouchStart, function() {
    return this.animate({
      properties: {
        opacity: 0.75
      },
      time: 0.2
    });
  });

  whiteButton.on(Events.TouchEnd, function() {
    return this.animate({
      properties: {
        opacity: 1
      },
      time: 0.2
    });
  });

  label_createAccount = new Layer({
    superLayer: whiteButton,
    width: 302,
    height: 36,
    image: "images/Create_Account.png",
    y: 40
  });

  label_createAccount.centerX();

  label_SignIn = new Layer({
    superLayer: whiteButton,
    width: 130,
    height: 44,
    image: "images/Sign_in.png",
    y: 40,
    visible: false
  });

  label_SignIn.centerX();

  label_resetPassword = new Layer({
    superLayer: whiteButton,
    width: 304,
    height: 46,
    image: "images/Reset_password.png",
    y: 40,
    visible: false
  });

  label_resetPassword.centerX();

  text_SignIn = new Layer({
    superLayer: page6,
    width: 539,
    height: 95,
    image: "images/text_SignIn.png",
    y: 962
  });

  text_SignIn.centerX();


  /* PAGE INDICATORS */

  indicatorsContainer = new Layer({
    backgroundColor: null,
    width: page.width,
    height: 12,
    y: 1102
  });

  allIndicators = [];

  for (i = _i = 0; _i <= 5; i = ++_i) {
    indicator = new Layer({
      superLayer: indicatorsContainer,
      backgroundColor: "#FFFFFF",
      width: 12,
      height: 12,
      borderRadius: "50%",
      opacity: 0.5,
      x: 239 + (i * 30)
    });
    indicator.states.add({
      active: {
        opacity: 1
      }
    });
    indicator.states.animationOptions = {
      time: 0.5
    };
    allIndicators.push(indicator);
  }

  allIndicators[0].states["switch"]("active");

  page.on("change:currentPage", function() {
    var current, _j, _len;
    for (_j = 0, _len = allIndicators.length; _j < _len; _j++) {
      indicator = allIndicators[_j];
      indicator.states["switch"]("default");
    }
    current = page.horizontalPageIndex(page.currentPage);
    return allIndicators[current].states["switch"]("active");
  });


  /* SPLASH PAGE */

  splash_screen = new Layer({
    width: 640,
    height: 1136,
    image: "images/splash_screen.png",
    ignoreEvents: false
  });

  Utils.delay(2.0, function() {
    splash_screen.animate({
      properties: {
        opacity: 0,
        scale: 2
      },
      time: 0.5
    });
    return splash_screen.ignoreEvents = true;
  });


  /* PAGE ACTIONS */

  page.on(Events.Move, function() {
    weather.x = w_x + (page.scrollX * 1.7);
    instagram.x = i_x + (page.scrollX * 1.5);
    rss_feed.x = r_x + (page.scrollX * 0.9);
    facebook.x = f_x + (page.scrollX * 0.55);
    calendar.x = c_x + (page.scrollX * 1.3);
    gmail.x = g_x + (page.scrollX * 0.4);
    stocks.x = s_x + (page.scrollX * 1.5);
    soundcloud.x = sc_x + page.scrollX;
    instagram_recipe.x = Utils.modulate(page.scrollX, [page.width, page.width * 2], [i_recipe_x, i_recipe_x + page.width], true);
    recipe_arrows.x = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [r_arrow_x, r_arrow_x - (page.width * 1.5)], true);
    bottom_phone.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [bottom_phone_y, 616], true);
    trail_left.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.1, 1], true);
    trail_left.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [518 + page.height, 518], true);
    trail_left.opacity = Utils.modulate(page.scrollX, [page.width * 2.4, page.width * 3], [0, 1], true);
    trail_right.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.1, 1], true);
    trail_right.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [586 + page.height, 586], true);
    trail_right.opacity = Utils.modulate(page.scrollX, [page.width * 2.4, page.width * 3], [0, 1], true);
    trail_c_left.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.1, 1], true);
    trail_c_left.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [410 + page.height, 410], true);
    trail_c_left.opacity = Utils.modulate(page.scrollX, [page.width * 2.4, page.width * 3], [0, 1], true);
    trail_c_right.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.1, 1], true);
    trail_c_right.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [414 + page.height, 414], true);
    trail_c_right.opacity = Utils.modulate(page.scrollX, [page.width * 2.4, page.width * 3], [0, 1], true);
    ios_photos.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.5, 1], true);
    ios_photos.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [500 + page.height, 500], true);
    ios_notif.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.5, 1], true);
    ios_notif.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [320 + page.height, 320], true);
    ios_location.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.5, 1], true);
    ios_location.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [322 + page.height, 322], true);
    ios_contacts.scale = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [0.5, 1], true);
    ios_contacts.y = Utils.modulate(page.scrollX, [page.width * 2, page.width * 3], [572 + page.height, 572], true);
    bottom_phone.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [0, -page.width], true);
    ios_notif.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [158, 158 - page.width], true);
    ios_notif.opacity = Utils.modulate(page.scrollX, [page.width * 3, (page.width * 3) + 100], [1, 0], true);
    trail_left.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [60, 60 - page.width], true);
    trail_left.opacity = Utils.modulate(page.scrollX, [page.width * 3, (page.width * 3) + 40], [1, 0], true);
    trail_right.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [360, 360 - page.width], true);
    trail_right.opacity = Utils.modulate(page.scrollX, [page.width * 3, (page.width * 3) + 40], [1, 0], true);
    trail_c_left.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [172, 172 - page.width], true);
    trail_c_left.opacity = Utils.modulate(page.scrollX, [page.width * 3, (page.width * 3) + 40], [1, 0], true);
    trail_c_right.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [336, 336 - page.width], true);
    trail_c_right.opacity = Utils.modulate(page.scrollX, [page.width * 3, (page.width * 3) + 40], [1, 0], true);
    whiteButton.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 6], [page.width + 50, -page.width + 50], true);
    text_SignIn.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 6], [(page.width * .5) + 50, -(page.width * .5) + 50], true);
    indicatorsContainer.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 5], [0, -page.width * 2], true);
    if (page.scrollX >= page.width * 3) {
      ios_photos.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [phot_pos.p4.x, phot_pos.p5.x], true);
      ios_photos.y = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [phot_pos.p4.y, phot_pos.p5.y], true);
      ios_photos.width = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
      ios_photos.height = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
      ios_location.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [loca_pos.p4.x, loca_pos.p5.x], true);
      ios_location.y = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [loca_pos.p4.y, loca_pos.p5.y], true);
      ios_location.width = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
      ios_location.height = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
      ios_contacts.x = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [cont_pos.p4.x, cont_pos.p5.x], true);
      ios_contacts.y = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [cont_pos.p4.y, cont_pos.p5.y], true);
      ios_contacts.width = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
      ios_contacts.height = Utils.modulate(page.scrollX, [page.width * 3, page.width * 4], [182, 80], true);
    }
    if (page.scrollX >= page.width * 4) {
      ios_photos.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 5], [phot_pos.p5.x, phot_pos.p5.x - page.width], true);
      ios_location.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 5], [loca_pos.p5.x, loca_pos.p5.x - page.width], true);
      return ios_contacts.x = Utils.modulate(page.scrollX, [page.width * 4, page.width * 5], [cont_pos.p5.x, cont_pos.p5.x - page.width], true);
    }
  });


  /* FORM INTERACTIONS */

  currentMode = "signup";

  switchToMode = function(mode) {
    if (mode === "signIn") {
      if (currentMode === "resetPassw") {
        placeholder_reset_Password.animate({
          properties: {
            opacity: 0
          },
          time: 0.25
        });
        cancel_small.opacity = 0;
        reset_Password_small.visible = true;
        reset_Password_small.y = 570;
        reset_Password_small.animate({
          properties: {
            y: 677
          },
          time: 0.2,
          delay: 0.25
        });
      } else {
        placeholders_sign_Up.animate({
          properties: {
            opacity: 0
          },
          time: 0.2,
          delay: 0.25
        });
      }
      Utils.delay(0.25, function() {
        label_resetPassword.visible = false;
        label_createAccount.visible = false;
        label_SignIn.visible = true;
        text_SignIn.visible = false;
        text_SignUp.visible = true;
        form_fields.states["switch"]("signin");
        reset_Password_small.animate({
          properties: {
            opacity: 1
          },
          time: 0.5,
          delay: 0.25
        });
        return placeholders_sign_In.animate({
          properties: {
            opacity: 1
          },
          time: 0.25,
          delay: 0.25
        });
      });
    } else if (mode === "createAccount") {
      placeholders_sign_In.animate({
        properties: {
          opacity: 0
        },
        time: 0.25
      });
      reset_Password_small.animate({
        properties: {
          opacity: 0
        },
        time: 0.25,
        delay: 0.25
      });
      Utils.delay(0.25, function() {
        label_createAccount.visible = true;
        label_SignIn.visible = false;
        text_SignIn.visible = true;
        text_SignUp.visible = false;
        return form_fields.states["switch"]("signup");
      });
      placeholders_sign_Up.animate({
        properties: {
          opacity: 1
        },
        time: 0.25,
        delay: 0.5
      });
    } else if (mode === "resetPassw") {
      placeholders_sign_In.animate({
        properties: {
          opacity: 0
        },
        time: 0.25
      });
      cancel_small.y = 676;
      Utils.delay(0.25, function() {
        reset_Password_small.visible = false;
        cancel_small.opacity = 1;
        label_SignIn.visible = false;
        label_resetPassword.visible = true;
        text_SignUp.visible = false;
        return form_fields.states["switch"]("resetpassw");
      });
      cancel_small.animate({
        properties: {
          y: 570
        },
        time: 0.20,
        delay: 0.25
      });
      placeholder_reset_Password.animate({
        properties: {
          opacity: 1
        },
        time: 0.25,
        delay: 0.5
      });
    }
    return currentMode = mode;
  };

  text_SignIn.on(Events.Click, function() {
    return switchToMode("signIn");
  });

  text_SignUp.on(Events.Click, function() {
    return switchToMode("createAccount");
  });

  reset_Password_small.on(Events.Click, function() {
    return switchToMode("resetPassw");
  });

  cancel_small.on(Events.Click, function() {
    return switchToMode("signIn");
  });

}).call(this);
