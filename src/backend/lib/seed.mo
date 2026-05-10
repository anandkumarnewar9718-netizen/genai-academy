import CoursesLib "courses";
import LessonsLib "lessons";
import QuizzesLib "quizzes";

module {
  /// Seeds the canister with sample Gen AI curriculum data.
  public func seedSampleData(
    coursesState : CoursesLib.CoursesState,
    lessonsState : LessonsLib.LessonsState,
    quizzesState : QuizzesLib.QuizzesState,
  ) : () {
    // Only seed if no courses exist yet
    if (coursesState.state.nextCourseId > 1) return;

    // ─── Course 1: Introduction to Generative AI ───
    let c1 = CoursesLib.createCourse(
      coursesState,
      {
        title = "Introduction to Generative AI";
        description = "A beginner-friendly course covering the fundamentals of generative AI, large language models, and how to use AI tools effectively.";
        difficulty = #Beginner;
        thumbnail = "🤖";
        learningObjectives = [
          "Understand what generative AI is and how it works",
          "Learn about large language models (LLMs)",
          "Use prompting techniques effectively",
          "Recognize AI limitations and ethical considerations",
        ];
      },
    );

    let l1_1 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c1.id;
        title = "What is Generative AI?";
        content = "# What is Generative AI?\n\nGenerative AI refers to artificial intelligence systems that can create new content — text, images, audio, video, and more — based on patterns learned from training data.\n\n## Key Concepts\n\n**Large Language Models (LLMs)** are neural networks trained on vast amounts of text data. They learn statistical patterns in language to predict and generate coherent text.\n\n**Examples of Generative AI:**\n- ChatGPT / GPT-4 (text)\n- DALL-E / Midjourney (images)\n- Suno / Udio (music)\n- Sora / Runway (video)\n\n## How It Works\n\nAt its core, a language model predicts the next most likely token (word or sub-word) given a context. By doing this repeatedly, it generates coherent responses.\n\n## Key Takeaway\n\nGenerative AI doesn't \"understand\" in the human sense — it's extremely sophisticated pattern matching. This is why it can make mistakes (\"hallucinations\") and why prompting matters.";
        learningObjectives = ["Define generative AI", "Identify major categories of generative AI tools"];
        orderIndex = 1;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c1.id, l1_1.id);

    let q1_1 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l1_1.id;
        title = "What is Generative AI? Quiz";
        questions = [
          {
            questionText = "What does a large language model primarily do?";
            options = [
              "Store and retrieve documents",
              "Predict and generate text based on patterns",
              "Execute code on a server",
              "Translate images to text",
            ];
            correctAnswerIndex = 1;
            explanation = "LLMs predict the next likely token based on learned patterns, enabling coherent text generation.";
          },
          {
            questionText = "Which of the following is an example of a generative AI image model?";
            options = ["ChatGPT", "DALL-E", "Suno", "Sora"];
            correctAnswerIndex = 1;
            explanation = "DALL-E is OpenAI's image generation model. ChatGPT is text, Suno is audio, and Sora is video.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l1_1.id, ?q1_1.id);

    let l1_2 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c1.id;
        title = "Prompting Fundamentals";
        content = "# Prompting Fundamentals\n\nA **prompt** is the input you give to an AI model. The quality of your prompt directly determines the quality of the output.\n\n## Core Prompting Techniques\n\n### 1. Be Specific\nVague prompts → vague answers.\n- ❌ \"Tell me about marketing\"\n- ✅ \"Write a 3-bullet summary of email marketing best practices for a SaaS startup targeting small businesses\"\n\n### 2. Provide Context\nGive the model the role and background it needs.\n- \"You are an experienced Python developer. Explain async/await to a JavaScript developer.\"\n\n### 3. Few-Shot Examples\nShow examples of the desired output format.\n\n### 4. Chain of Thought\nAsk the model to think step-by-step for complex reasoning tasks.\n- \"Think through this step by step: ...\"\n\n### 5. Output Format\nSpecify exactly how you want the response formatted.\n- \"Respond in JSON with keys: title, summary, tags\"\n\n## The Prompt Template\n\n```\n[Role]: You are a [role/persona].\n[Context]: Here is the relevant background: [context]\n[Task]: Your task is to [specific task].\n[Format]: Respond as [format/structure].\n[Constraints]: Keep it [length/tone/style].\n```";
        learningObjectives = ["Write effective prompts", "Apply prompting techniques to real tasks"];
        orderIndex = 2;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c1.id, l1_2.id);

    let q1_2 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l1_2.id;
        title = "Prompting Fundamentals Quiz";
        questions = [
          {
            questionText = "Which prompting technique asks the model to reason through a problem step-by-step?";
            options = ["Few-Shot", "Chain of Thought", "Role Prompting", "Output Formatting"];
            correctAnswerIndex = 1;
            explanation = "Chain of Thought prompting asks the model to think through problems step-by-step, improving accuracy on complex tasks.";
          },
          {
            questionText = "What is the main benefit of providing examples in a prompt (few-shot prompting)?";
            options = [
              "It makes the model faster",
              "It reduces token usage",
              "It shows the model the desired output format and style",
              "It prevents hallucinations entirely",
            ];
            correctAnswerIndex = 2;
            explanation = "Few-shot examples demonstrate the expected output structure, helping the model match the desired format and style.";
          },
          {
            questionText = "Which of the following is the BEST prompt for getting a useful answer?";
            options = [
              "Tell me about React",
              "Explain React hooks to a developer who knows JavaScript but not React, with one code example",
              "React",
              "What is React?",
            ];
            correctAnswerIndex = 1;
            explanation = "Providing context (knows JS, not React) and constraints (one code example) produces a more targeted, useful response.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l1_2.id, ?q1_2.id);

    let l1_3 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c1.id;
        title = "AI Ethics and Limitations";
        content = "# AI Ethics and Limitations\n\n## Limitations of Generative AI\n\n### Hallucinations\nAI models can confidently produce false information. Always verify factual claims from AI output, especially for medical, legal, or financial decisions.\n\n### Knowledge Cutoffs\nModels are trained on data up to a certain date and don't know about recent events unless given web access or told in the prompt.\n\n### Bias\nModels reflect biases present in training data. Be aware of potential cultural, gender, and other biases in outputs.\n\n### No Real Understanding\nModels don't truly \"understand\" — they generate statistically plausible text. Logical or mathematical errors can appear convincing.\n\n## Ethical Considerations\n\n- **Misinformation**: AI-generated content can spread false information at scale\n- **Intellectual Property**: Training data and generated outputs raise copyright questions\n- **Privacy**: Don't share personal or sensitive data in prompts\n- **Deepfakes**: AI-generated media can be used to deceive\n- **Displacement**: Consider the impact on workers in affected industries\n\n## Best Practices\n\n1. Always review and fact-check AI outputs\n2. Disclose when content is AI-generated\n3. Never enter sensitive personal or proprietary data into public AI tools\n4. Use AI as a collaborator, not a replacement for critical thinking";
        learningObjectives = ["Identify AI limitations", "Apply ethical guidelines when using AI tools"];
        orderIndex = 3;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c1.id, l1_3.id);

    let q1_3 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l1_3.id;
        title = "AI Ethics and Limitations Quiz";
        questions = [
          {
            questionText = "What is an AI \"hallucination\"?";
            options = [
              "When an AI generates images from text",
              "When an AI confidently produces false or fabricated information",
              "When an AI crashes due to an error",
              "When an AI refuses to answer a question",
            ];
            correctAnswerIndex = 1;
            explanation = "Hallucinations are when AI models generate confident but false information — a key limitation to be aware of.";
          },
          {
            questionText = "Why should you NOT share personal medical information with a public AI tool?";
            options = [
              "The AI cannot process medical terms",
              "It slows down the AI",
              "Privacy risks — data may be stored and used for training",
              "Medical questions are always too complex for AI",
            ];
            correctAnswerIndex = 2;
            explanation = "Public AI tools may store prompts and use them for training. Never share sensitive personal or proprietary information.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l1_3.id, ?q1_3.id);

    // ─── Course 2: AI Tools for Professionals ───
    let c2 = CoursesLib.createCourse(
      coursesState,
      {
        title = "AI Tools for Professionals";
        description = "Practical guide to integrating AI tools into your professional workflow — from writing and coding to data analysis and decision-making.";
        difficulty = #Intermediate;
        thumbnail = "💼";
        learningObjectives = [
          "Select the right AI tool for each professional task",
          "Accelerate writing and communication with AI",
          "Use AI for data analysis and summarization",
          "Build AI-assisted coding workflows",
        ];
      },
    );

    let l2_1 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c2.id;
        title = "AI Writing and Communication";
        content = "# AI Writing and Communication\n\nAI tools have transformed professional writing workflows. Here's how to use them effectively.\n\n## Use Cases\n\n### Drafting\n- Emails, reports, proposals, documentation\n- First drafts, outlines, executive summaries\n- Translating technical content for non-technical audiences\n\n### Editing and Improvement\n- Grammar and clarity checks\n- Tone adjustment (formal ↔ casual)\n- Condensing long documents\n\n### Translation and Localization\n- Translate content while preserving tone\n- Adapt culturally sensitive content\n\n## Workflow: AI-Assisted Writing\n\n1. **Start with a rough outline** — Tell AI the structure you want\n2. **Generate a first draft** — Don't aim for perfect on the first try\n3. **Review and edit** — You own the final content\n4. **Fact-check** — Verify all specific claims, dates, statistics\n5. **Polish** — Use AI to refine tone and clarity\n\n## Sample Prompts for Writers\n\n```\nDraft a professional email declining a meeting invitation. \nTone: polite but firm. Length: 3-4 sentences. \nContext: I have a conflicting deadline.\n```\n\n```\nSummarize the following report in 5 bullet points for a \nexecutive audience: [paste text]\n```";
        learningObjectives = ["Use AI to accelerate professional writing", "Build an AI-assisted editing workflow"];
        orderIndex = 1;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c2.id, l2_1.id);

    let q2_1 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l2_1.id;
        title = "AI Writing Quiz";
        questions = [
          {
            questionText = "What should you always do after using AI to generate a first draft?";
            options = [
              "Submit it immediately — AI is always accurate",
              "Review, edit, and fact-check the content",
              "Run it through another AI tool",
              "Translate it to another language first",
            ];
            correctAnswerIndex = 1;
            explanation = "AI drafts require human review — check for accuracy, tone alignment, and factual correctness before using.";
          },
          {
            questionText = "Which AI writing task is MOST appropriate for professional use without heavy review?";
            options = [
              "Generating specific sales statistics",
              "Creating a meeting agenda template",
              "Writing a legal contract",
              "Citing peer-reviewed research",
            ];
            correctAnswerIndex = 1;
            explanation = "Templates and structural content require less fact-checking than statistics, legal content, or research citations.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l2_1.id, ?q2_1.id);

    let l2_2 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c2.id;
        title = "AI for Data Analysis";
        content = "# AI for Data Analysis\n\n## What AI Can Do with Data\n\n- **Summarize** large datasets in plain language\n- **Generate** SQL queries, Python/R scripts from descriptions\n- **Explain** complex analysis results\n- **Identify** trends and patterns when given data\n- **Create** visualizations (with tools like Code Interpreter)\n\n## ChatGPT Code Interpreter / Advanced Data Analysis\n\nOpenAI's Advanced Data Analysis feature lets you:\n1. Upload CSV, Excel, or PDF files\n2. Ask questions in plain English\n3. Get analysis, charts, and statistical summaries\n\n## Example Prompts for Data Work\n\n```\nI have a CSV with columns: date, revenue, region, product.\nWrite a Python script using pandas to:\n1. Show total revenue by region\n2. Plot monthly revenue trends\n3. Find the top 3 products by revenue\n```\n\n```\nAnalyze this sales data and give me:\n- Key trends\n- Top and bottom performers\n- 3 actionable recommendations\n[paste data]\n```\n\n## Important Caveats\n\n- Don't upload confidential company data to public AI tools\n- Verify all calculations independently for high-stakes decisions\n- AI-generated code should be reviewed before running in production";
        learningObjectives = ["Use AI to analyze and summarize data", "Generate data scripts with natural language"];
        orderIndex = 2;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c2.id, l2_2.id);

    let q2_2 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l2_2.id;
        title = "AI for Data Analysis Quiz";
        questions = [
          {
            questionText = "What should you avoid when using public AI tools for data analysis?";
            options = [
              "Asking for trend summaries",
              "Uploading confidential company data",
              "Generating Python scripts",
              "Asking for chart recommendations",
            ];
            correctAnswerIndex = 1;
            explanation = "Confidential data should never be uploaded to public AI tools due to privacy and data security risks.";
          },
          {
            questionText = "What does ChatGPT's Advanced Data Analysis (Code Interpreter) allow you to do?";
            options = [
              "Connect directly to your company database",
              "Upload files and analyze them with AI-generated code",
              "Run analysis on real-time stock data",
              "Automatically deploy data pipelines",
            ];
            correctAnswerIndex = 1;
            explanation = "Code Interpreter lets you upload files and ask questions in plain English, generating and running analysis code.";
          },
          {
            questionText = "When should you independently verify an AI-generated calculation?";
            options = [
              "Never — AI math is always correct",
              "Only for very large numbers",
              "For high-stakes or business-critical decisions",
              "Only when the AI expresses uncertainty",
            ];
            correctAnswerIndex = 2;
            explanation = "AI can make arithmetic errors. Always verify calculations independently when the stakes are high.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l2_2.id, ?q2_2.id);

    let l2_3 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c2.id;
        title = "AI-Assisted Coding";
        content = "# AI-Assisted Coding\n\n## AI Coding Tools\n\n| Tool | Best For |\n|------|----------|\n| GitHub Copilot | In-IDE autocompletion |\n| ChatGPT / Claude | Code generation, debugging, explanation |\n| Cursor | AI-native code editor |\n| Replit AI | Browser-based development |\n\n## What AI Coding Tools Do Well\n\n- **Boilerplate generation**: Forms, CRUD endpoints, standard patterns\n- **Debugging**: Explain error messages, suggest fixes\n- **Code review**: Find potential issues, improve readability\n- **Documentation**: Generate comments and docstrings\n- **Language translation**: Convert code between languages\n- **Unit tests**: Generate test cases from function signatures\n\n## Effective Prompting for Code\n\n```\nYou are an expert TypeScript developer.\nWrite a React hook that fetches user data from /api/users/:id,\nhandles loading and error states, and caches the result.\nUse React Query. Include TypeScript types.\n```\n\n```\nThis Python function has a bug. Explain what's wrong and fix it:\n[paste code]\nError: [paste error message]\n```\n\n## Best Practices\n\n1. **Always review generated code** before running it\n2. **Understand what it does** — don't blindly copy\n3. **Test thoroughly** — AI code often has subtle edge-case bugs\n4. **Security review** — AI can generate insecure code patterns\n5. **Use AI to learn** — ask it to explain what the code does";
        learningObjectives = ["Use AI coding tools effectively", "Write good code generation prompts"];
        orderIndex = 3;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c2.id, l2_3.id);

    let q2_3 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l2_3.id;
        title = "AI-Assisted Coding Quiz";
        questions = [
          {
            questionText = "What is GitHub Copilot primarily used for?";
            options = [
              "Code review in pull requests",
              "In-IDE code autocompletion powered by AI",
              "Deploying code to cloud servers",
              "Running automated unit tests",
            ];
            correctAnswerIndex = 1;
            explanation = "GitHub Copilot provides AI-powered code suggestions directly within your IDE as you type.";
          },
          {
            questionText = "Why is it important to review AI-generated code before using it in production?";
            options = [
              "It uses an outdated coding style",
              "It may have subtle bugs, security vulnerabilities, or edge-case issues",
              "It is usually written in the wrong programming language",
              "It always violates software licenses",
            ];
            correctAnswerIndex = 1;
            explanation = "AI-generated code can contain subtle bugs, security issues, and edge cases that require human review.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l2_3.id, ?q2_3.id);

    // ─── Course 3: Building with LLM APIs ───
    let c3 = CoursesLib.createCourse(
      coursesState,
      {
        title = "Building with LLM APIs";
        description = "A technical deep-dive into building AI-powered applications using large language model APIs. Learn to design prompts, handle context, manage tokens, and build production-ready LLM features.";
        difficulty = #Advanced;
        thumbnail = "⚡";
        learningObjectives = [
          "Integrate LLM APIs into applications",
          "Design effective system prompts",
          "Manage context windows and token costs",
          "Implement RAG (Retrieval Augmented Generation)",
        ];
      },
    );

    let l3_1 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c3.id;
        title = "LLM API Fundamentals";
        content = "# LLM API Fundamentals\n\n## Core Concepts\n\n### Messages Structure\nMost LLM APIs use a messages array with roles:\n\n```json\n{\n  \"model\": \"gpt-4o\",\n  \"messages\": [\n    { \"role\": \"system\", \"content\": \"You are a helpful assistant.\" },\n    { \"role\": \"user\", \"content\": \"What is machine learning?\" }\n  ]\n}\n```\n\n### Roles\n- **system**: Sets the AI's persona, rules, and context\n- **user**: The human's input\n- **assistant**: Previous AI responses (for multi-turn conversations)\n\n### Key Parameters\n\n| Parameter | Effect | Typical Range |\n|-----------|--------|---------------|\n| temperature | Randomness/creativity | 0.0 (deterministic) – 2.0 (very random) |\n| max_tokens | Maximum response length | 1 – model limit |\n| top_p | Nucleus sampling | 0.0 – 1.0 |\n| stream | Stream tokens as generated | true/false |\n\n## Popular APIs\n\n- **OpenAI**: GPT-4o, GPT-4o-mini\n- **Anthropic**: Claude 3.5 Sonnet, Claude 3 Haiku\n- **Google**: Gemini 1.5 Pro, Gemini Flash\n- **Meta (open source)**: Llama 3\n\n## Token Counting\n\nTokens ≈ 0.75 words. Cost is per token (input + output).\n- \"Hello, how are you?\" ≈ 6 tokens\n- GPT-4o: ~$5 per 1M input tokens, ~$15 per 1M output tokens";
        learningObjectives = ["Understand LLM API structure", "Configure key API parameters"];
        orderIndex = 1;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c3.id, l3_1.id);

    let q3_1 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l3_1.id;
        title = "LLM API Fundamentals Quiz";
        questions = [
          {
            questionText = "What does a high temperature value (e.g., 1.8) do to LLM output?";
            options = [
              "Makes responses shorter",
              "Makes responses more creative and random",
              "Makes responses more deterministic",
              "Increases the model's knowledge cutoff",
            ];
            correctAnswerIndex = 1;
            explanation = "Higher temperature increases randomness/creativity. Temperature near 0 gives deterministic, focused outputs.";
          },
          {
            questionText = "In the OpenAI messages array, what is the purpose of the 'system' role?";
            options = [
              "It contains the user's question",
              "It represents the model's previous response",
              "It sets the AI's persona, rules, and context",
              "It specifies the model version to use",
            ];
            correctAnswerIndex = 2;
            explanation = "The system message defines the AI's behavior, persona, and constraints for the entire conversation.";
          },
          {
            questionText = "Approximately how many tokens is the phrase \"Hello, how are you?\"?";
            options = ["1 token", "6 tokens", "20 tokens", "100 tokens"];
            correctAnswerIndex = 1;
            explanation = "Tokens are roughly 0.75 words. A short phrase like this is approximately 6 tokens.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l3_1.id, ?q3_1.id);

    let l3_2 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c3.id;
        title = "System Prompts and Context Management";
        content = "# System Prompts and Context Management\n\n## Designing Effective System Prompts\n\nA system prompt is your opportunity to define the AI's complete behavior. Treat it like a contract.\n\n### Structure\n```\n## Identity\nYou are [name], a [role] for [company/product].\n\n## Capabilities\nYou can help users with: [list]\n\n## Constraints\n- Never discuss [off-topic areas]\n- Always [required behavior]\n- When unsure, [fallback behavior]\n\n## Response Format\n[Specify tone, length, format preferences]\n```\n\n## Context Window Management\n\nEvery LLM has a **context window** — the maximum tokens it can process at once.\n\n| Model | Context Window |\n|-------|---------------|\n| GPT-4o | 128K tokens |\n| Claude 3.5 Sonnet | 200K tokens |\n| Gemini 1.5 Pro | 1M tokens |\n\n### Strategies for Long Conversations\n\n1. **Sliding window**: Drop oldest messages when approaching limit\n2. **Summarization**: Compress old messages into a summary\n3. **RAG**: Retrieve only relevant context as needed\n\n## Token Optimization\n\n- Be concise in system prompts — every token costs money\n- Use structured formats (JSON, bullet points) that are token-efficient\n- Cache repeated system prompts with API prompt caching features\n- Use smaller models (GPT-4o-mini, Haiku) for simple tasks";
        learningObjectives = ["Design production-quality system prompts", "Manage context window constraints"];
        orderIndex = 2;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c3.id, l3_2.id);

    let q3_2 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l3_2.id;
        title = "System Prompts and Context Quiz";
        questions = [
          {
            questionText = "What is the context window of a language model?";
            options = [
              "The number of API calls allowed per day",
              "The maximum tokens the model can process at once",
              "The number of languages the model supports",
              "The size of the model's training dataset",
            ];
            correctAnswerIndex = 1;
            explanation = "The context window is the maximum number of tokens (input + output) the model can process in a single request.";
          },
          {
            questionText = "What strategy involves compressing old conversation history to fit within the context window?";
            options = ["Temperature scaling", "Few-shot prompting", "Summarization", "Token caching"];
            correctAnswerIndex = 2;
            explanation = "Summarization compresses previous conversation turns into a shorter summary to free up context window space.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l3_2.id, ?q3_2.id);

    let l3_3 = LessonsLib.createLesson(
      lessonsState,
      {
        courseId = c3.id;
        title = "Retrieval Augmented Generation (RAG)";
        content = "# Retrieval Augmented Generation (RAG)\n\n## What is RAG?\n\nRAG is a pattern that enhances LLM responses by retrieving relevant information from a knowledge base before generating a response. This solves two key problems:\n- Knowledge cutoffs (the model doesn't know recent events)\n- Hallucinations (the model invents facts)\n\n## How RAG Works\n\n```\n1. User asks a question\n2. Query is converted to an embedding vector\n3. Similar vectors are retrieved from a vector database\n4. Retrieved documents are added to the LLM context\n5. LLM generates a response grounded in real documents\n```\n\n## Components\n\n### Embeddings\nNumerical representations of text that capture semantic meaning. Similar text → similar vectors.\n\n```python\n# OpenAI Embeddings API\nresponse = client.embeddings.create(\n    model=\"text-embedding-3-small\",\n    input=\"What is machine learning?\"\n)\nembedding = response.data[0].embedding  # [0.023, -0.041, ...]\n```\n\n### Vector Databases\nStores embeddings for fast similarity search:\n- **Pinecone**, **Weaviate**, **Qdrant** (managed)\n- **pgvector** (PostgreSQL extension)\n- **FAISS** (local, open source)\n\n## RAG Prompt Template\n\n```\nYou are a helpful assistant. Use ONLY the context below to answer.\nIf the answer is not in the context, say you don't know.\n\nContext:\n{retrieved_documents}\n\nQuestion: {user_question}\n```\n\n## When to Use RAG\n\n- Chatbots over company documentation\n- Customer support with product knowledge bases\n- Research assistants with domain-specific data\n- Any use case requiring up-to-date or proprietary information";
        learningObjectives = ["Explain the RAG architecture", "Implement a basic RAG pipeline"];
        orderIndex = 3;
      },
    );
    CoursesLib.appendLessonToCourse(coursesState, c3.id, l3_3.id);

    let q3_3 = QuizzesLib.createQuiz(
      quizzesState,
      {
        lessonId = l3_3.id;
        title = "RAG Quiz";
        questions = [
          {
            questionText = "What problem does Retrieval Augmented Generation (RAG) primarily solve?";
            options = [
              "Making LLMs generate faster responses",
              "Reducing the model's temperature",
              "Grounding LLM responses in retrieved real documents to reduce hallucinations",
              "Increasing the context window size",
            ];
            correctAnswerIndex = 2;
            explanation = "RAG retrieves relevant documents and adds them as context, helping the model give factually grounded responses.";
          },
          {
            questionText = "What are embeddings in the context of RAG?";
            options = [
              "Compressed versions of images",
              "Numerical vector representations of text that capture semantic meaning",
              "API keys for vector databases",
              "Tokens that are cached for reuse",
            ];
            correctAnswerIndex = 1;
            explanation = "Embeddings are high-dimensional numerical vectors that represent text semantically — similar text has similar vectors.";
          },
          {
            questionText = "When is RAG the BEST architectural choice?";
            options = [
              "When you want the model to be more creative",
              "When the application needs access to proprietary or up-to-date knowledge",
              "When you want to reduce API costs",
              "When you need the model to generate images",
            ];
            correctAnswerIndex = 1;
            explanation = "RAG is ideal when responses must be grounded in specific, current, or proprietary knowledge not in the model's training data.";
          },
        ];
      },
    );
    LessonsLib.setQuizId(lessonsState, l3_3.id, ?q3_3.id);
  };
};
