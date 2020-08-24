import React, { useEffect, useState }                             from 'react'
import { injectIntl }                                             from 'react-intl'

import { Button }                                                 from '@ui/button'
import { FormEl }                                                 from '@ui/form-element'
import { Input, LabelText, MaskEmail, MaskPhone, StyleInputHero } from '@ui/input'
import { Box, Column }                                            from '@ui/layout'
import { Text }                                                   from '@ui/text'
import { theme }                                                  from '@ui/theme'

import messages                                                   from './Messages'

const Form = ({ intl }: any) => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [end, setEnd] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = () => {
    setName('')
    setJob('')
    setPhone('')
    setEmail('')

    if (name && job && phone && email) {
      setEnd(`${intl.formatMessage(messages.formEnd)}`)
      setIsSubmit(true)

      const message = [
        {
          name,
          job,
          phone,
          email,
        },
      ]

      console.log(message) // eslint-disable-line
    } else {
      setEnd(`${intl.formatMessage(messages.formError)}`)
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleForm()
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEnd('')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [end])

  return (
    <FormEl onKeyPress={handleKeyPress}>
      <Column>
        <Box display='flex' justifyContent='center' alignItems='center' width={320}>
          <Text
            fontSize={theme.fontSize.xs}
            color={isSubmit ? theme.colors.whiteBlue : theme.colors.error}
            fontFamily={theme.fontFamily.text}
          >
            {end}
          </Text>
        </Box>
        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formName)}
        />
        <StyleInputHero>
          <Input
            type='text'
            name='name'
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </StyleInputHero>

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formJob)}
        />
        <StyleInputHero>
          <Input
            type='text'
            name='job'
            onChange={event => setJob(event.target.value)}
            value={job}
          />
        </StyleInputHero>

        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formPhone)}
        />
        <StyleInputHero>
          <MaskPhone onChange={event => setPhone(event.target.value)} value={phone} />
        </StyleInputHero>
        <LabelText
          color={theme.colors.white}
          bg={theme.colors.dark}
          text={intl.formatMessage(messages.formEmail)}
        />
        <StyleInputHero>
          <MaskEmail onChange={event => setEmail(event.target.value)} value={email} />
        </StyleInputHero>
        <Box height='20px' />
        <Button
          width={310}
          height={50}
          border='none'
          bg={theme.colors.whiteBlue}
          onClick={handleForm}
        >
          <Text
            color={theme.colors.white}
            fontFamily={theme.fontFamily.text}
            fontSize={theme.fontSize.xs}
          >
            {intl.formatMessage(messages.formButton)}
          </Text>
        </Button>
      </Column>
    </FormEl>
  )
}

export default injectIntl(Form)
