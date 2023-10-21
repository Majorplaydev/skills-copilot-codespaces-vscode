// Create Web Server with Express Framework
// Create Router for Comments
// Comments are stored in MongoDB
// Create RESTful API for Comments

// Import Express Framework
const express = require('express');

// Create Router for Comments
const router = express.Router();

// Import Comments Model
const Comments = require('../models/comments');

// Import Authentication Middleware
const { authenticate } = require('../middleware/authenticate');

// Import Authentication Middleware
const { authorize } = require('../middleware/authorize');

// Import Authentication Middleware
const { authorizeComment } = require('../middleware/authorizeComment');

// Import Authentication Middleware
const { authorizeCommentUpdate } = require('../middleware/authorizeCommentUpdate');

// Import Authentication Middleware
const { authorizeCommentDelete } = require('../middleware/authorizeCommentDelete');

// Import Authentication Middleware
const { authorizeCommentLike } = require('../middleware/authorizeCommentLike');

// Import Authentication Middleware
const { authorizeCommentUnlike } = require('../middleware/authorizeCommentUnlike');

// Import Authentication Middleware
const { authorizeCommentLikeUpdate } = require('../middleware/authorizeCommentLikeUpdate');

// Import Authentication Middleware
const { authorizeCommentLikeDelete } = require('../middleware/authorizeCommentLikeDelete');

// Import Authentication Middleware
const { authorizeCommentDislike } = require('../middleware/authorizeCommentDislike');

// Import Authentication Middleware
const { authorizeCommentUndislike } = require('../middleware/authorizeCommentUndislike');

// Import Authentication Middleware
const { authorizeCommentDislikeUpdate } = require('../middleware/authorizeCommentDislikeUpdate');

// Import Authentication Middleware
const { authorizeCommentDislikeDelete } = require('../middleware/authorizeCommentDislikeDelete');

// Import Authentication Middleware
const { authorizeCommentReport } = require('../middleware/authorizeCommentReport');

// Import Authentication Middleware
const { authorizeCommentReportUpdate } = require('../middleware/authorizeCommentReportUpdate');

// Import Authentication Middleware
const { authorizeCommentReportDelete } = require('../middleware/authorizeCommentReportDelete');

// Import Authentication Middleware
const { authorizeCommentBlock } = require('../middleware/authorizeCommentBlock');

// Import Authentication Middleware
const { authorizeCommentBlockUpdate } = require('../middleware/authorizeCommentBlockUpdate');

// Import Authentication Middleware
const { authorizeCommentBlockDelete } = require('../middleware/authorizeCommentBlockDelete');

// Import Authentication Middleware
const { authorizeCommentUnblock } = require('../middleware/authorizeCommentUnblock');

// Import Authentication Middleware
const { authorizeCommentUnblockUpdate } = require('../middleware/authorizeCommentUnblockUpdate');